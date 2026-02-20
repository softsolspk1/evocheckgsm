import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const data = [
    { region: "Central-1", areaName: "Faisalabad", areaId: "AS-008", kam: "Shahid Mehmood", kamCode: "S01090176", distributor: "Al Makkah Enterprises", distributorId: "D01090035" },
    { region: "Sindh-2", areaName: "Nawab Shah", areaId: "AS-004", kam: "Muhammad Shoaib", kamCode: "S01090297", distributor: "Mehran Pharmaceutical Dist", distributorId: "D01090025" },
    { region: "South", areaName: "Quetta", areaId: "AS-153", kam: "Muhammad Bilal", kamCode: "S01090145", distributor: "Ahmed Pharmaceutical Distributor", distributorId: "D01090150" },
    { region: "Central-1", areaName: "Jhang", areaId: "AS-011", kam: "Shahid Mehmood", kamCode: "S01090176", distributor: "Naveed Agencies", distributorId: "D01090038" },
    { region: "Central-1", areaName: "Sargodha", areaId: "AS-014", kam: "Shahid Mehmood", kamCode: "S01090176", distributor: "Sargodha Medical Store", distributorId: "D01090041" },
    { region: "Sindh-2", areaName: "Sukkur", areaId: "AS-030", kam: "Muhammad Shoaib", kamCode: "S01090297", distributor: "Arain Pharmaceutical Distributor", distributorId: "D01090152" },
    { region: "Sindh-2", areaName: "Larkana", areaId: "AS-033", kam: "Muhammad Shoaib", kamCode: "S01090297", distributor: "M.S. Distributors", distributorId: "D01090008" },
    { region: "Central-2", areaName: "Multan-1", areaId: "AS-126", kam: "Abdul Shakoor", kamCode: "S01090332", distributor: "Madina Agencies Multan", distributorId: "D01090045" },
    { region: "Central-2", areaName: "Multan-2", areaId: "AS-151", kam: "Abdul Shakoor", kamCode: "S01090332", distributor: "Madina Agencies Multan", distributorId: "D01090045" },
    { region: "Central-2", areaName: "Bahawalpur", areaId: "AS-129", kam: "Abdul Shakoor", kamCode: "S01090332", distributor: "New National Agencies", distributorId: "D01090142" },
    { region: "Central-2", areaName: "Rahim Yar Khan", areaId: "AS-131", kam: "Abdul Shakoor", kamCode: "S01090332", distributor: "National Agencies RYK", distributorId: "D01090144" },
    { region: "North-2", areaName: "Peshawar", areaId: "AS-017", kam: "Shaukat Hayat", kamCode: "S01090240", distributor: "Khyber Drugs Peshawar", distributorId: "D01090044" },
    { region: "North-2", areaName: "Kohat", areaId: "AS-020", kam: "Shaukat Hayat", kamCode: "S01090240", distributor: "Kohat Medical Store", distributorId: "D01090153" },
    { region: "North-2", areaName: "Hazara", areaId: "AS-022", kam: "Shaukat Hayat", kamCode: "S01090240", distributor: "Hazara Medical Store", distributorId: "D01090154" },
    { region: "North-2", areaName: "Mardan", areaId: "AS-042", kam: "Shaukat Hayat", kamCode: "S01090240", distributor: "Mardan Medical Store", distributorId: "D01090155" },
    { region: "North-2", areaName: "Swat", areaId: "AS-043", kam: "Shaukat Hayat", kamCode: "S01090240", distributor: "Swat Medical Store", distributorId: "D01090156" },
    { region: "North-1", areaName: "Rawalpindi-1", areaId: "AS-001", kam: "Muhammad Rizwan", kamCode: "S01090130", distributor: "Rizwan & Co Pindi", distributorId: "D01090157" },
    { region: "North-1", areaName: "Rawalpindi-2", areaId: "AS-154", kam: "Muhammad Rizwan", kamCode: "S01090130", distributor: "Rizwan & Co Pindi", distributorId: "D01090157" },
    { region: "North-1", areaName: "Islamabad", areaId: "AS-002", kam: "Muhammad Rizwan", kamCode: "S01090130", distributor: "Capital Traders Isloo", distributorId: "D01090158" },
    { region: "North-1", areaName: "Jehlum", areaId: "AS-003", kam: "Muhammad Rizwan", kamCode: "S01090130", distributor: "Jehlum Medical Store", distributorId: "D01090159" },
    { region: "Sindh-1", areaName: "Karachi-1", areaId: "AS-024", kam: "Tanveer Ahmed", kamCode: "S01090400", distributor: "Karachi Medicos", distributorId: "D01090160" },
    { region: "Sindh-1", areaName: "Karachi-2", areaId: "AS-025", kam: "Tanveer Ahmed", kamCode: "S01090400", distributor: "Karachi Medicos", distributorId: "D01090160" },
    { region: "Sindh-1", areaName: "Karachi-3", areaId: "AS-147", kam: "Tanveer Ahmed", kamCode: "S01090400", distributor: "Karachi Medicos", distributorId: "D01090160" },
    { region: "Sindh-1", areaName: "Hyderabad", areaId: "AS-028", kam: "Tanveer Ahmed", kamCode: "S01090400", distributor: "Hyderi Distributors", distributorId: "D01090161" },
];

async function main() {
    console.log("Starting import...");

    // Cleanup existing KAMs and Distributors to ensure "irrelevant data removed"
    // CAUTION: This will delete existing orders linked to them. 
    // If we want to keep orders, we should only delete unreferenced ones.
    // However, the user asked to "remove irrelevant data from portal".

    // For safety, let's just add/update what's in the image.

    for (const item of data) {
        // 1. Create/Find City
        let cityName = item.areaName.split('-')[0].trim(); // Extract base city name
        const city = await prisma.city.upsert({
            where: { name: cityName },
            update: {},
            create: { name: cityName }
        });

        // 2. Create/Find Area
        const area = await prisma.area.upsert({
            where: {
                name_cityId: {
                    name: item.areaName,
                    cityId: city.id
                }
            },
            update: {},
            create: {
                name: item.areaName,
                cityId: city.id
            }
        });

        // 3. Create/Find KAM (User with role KAM)
        const kam = await prisma.user.upsert({
            where: { employeeCode: item.kamCode },
            update: {
                name: item.kam,
                role: 'KAM',
                cityId: city.id,
                areaId: area.id
            },
            create: {
                email: `${item.kamCode.toLowerCase()}@pharmevo.biz`,
                name: item.kam,
                password: 'password123', // Default password
                role: 'KAM',
                employeeCode: item.kamCode,
                cityId: city.id,
                areaId: area.id
            }
        });

        // 4. Create/Find Distributor
        const distributor = await prisma.distributor.upsert({
            where: {
                name_areaId: {
                    name: item.distributor,
                    areaId: area.id
                }
            },
            update: {
                cityId: city.id
            },
            create: {
                name: item.distributor,
                cityId: city.id,
                areaId: area.id
            }
        });

        console.log(`Imported: ${item.areaName} - ${item.kam} - ${item.distributor}`);
    }

    console.log("Import completed!");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
