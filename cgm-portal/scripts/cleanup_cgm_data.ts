import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const allowedCities = [
    "Faisalabad", "Nawab Shah", "Quetta", "Jhang", "Sargodha",
    "Sukkur", "Larkana", "Multan", "Bahawalpur", "Rahim Yar Khan",
    "Peshawar", "Kohat", "Hazara", "Mardan", "Swat",
    "Rawalpindi", "Islamabad", "Jehlum", "Karachi", "Hyderabad"
];

const allowedKamCodes = [
    "S01090176", "S01090297", "S01090145", "S01090332",
    "S01090240", "S01090130", "S01090400"
];

async function main() {
    console.log("Starting cleanup of irrelevant data...");

    // 1. Delete Unrelated Distributors
    // We only keep if the name is in our allowed list or associated with allowed areas
    // But simplest is to delete those NOT created/updated by our recent import.
    // However, we don't have a reliable timestamp.

    // Let's delete Distributors whose names are NOT in our expected list?
    // No, better to keep things simple: delete cities not in the list.
    // Prisma delete cascade should handle areas, distributors if configured.

    // Check if cascade is on. In our schema, it's not explicit (default is restricted).

    const citiesToRemove = await prisma.city.findMany({
        where: {
            name: {
                notIn: allowedCities
            }
        },
        select: { id: true, name: true }
    });

    console.log(`Found ${citiesToRemove.length} cities to remove.`);

    for (const city of citiesToRemove) {
        // We must delete orders, patients, users etc linked to these first or handle them
        // For "cleanup", we'll just delete the entities if possible.
        try {
            // Delete related areas first
            await prisma.area.deleteMany({ where: { cityId: city.id } });
            await prisma.city.delete({ where: { id: city.id } });
            console.log(`Deleted City: ${city.name}`);
        } catch (err) {
            console.warn(`Could not delete City ${city.name} - likely has active Orders/Users.`);
        }
    }

    // 2. Cleanup KAMs
    const kamsToRemove = await prisma.user.findMany({
        where: {
            role: 'KAM',
            employeeCode: {
                notIn: allowedKamCodes
            }
        },
        select: { id: true, name: true, employeeCode: true }
    });

    console.log(`Found ${kamsToRemove.length} KAMs to remove.`);
    for (const kam of kamsToRemove) {
        try {
            await prisma.user.delete({ where: { id: kam.id } });
            console.log(`Deleted KAM: ${kam.name} (${kam.employeeCode})`);
        } catch (err) {
            console.warn(`Could not delete KAM ${kam.name} - likely has active Orders.`);
        }
    }

    console.log("Cleanup completed!");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
