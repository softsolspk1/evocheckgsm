import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const PREMIER_DISTRIBUTORS = [
    { name: "AL-ABBAS DISTRIBUTORS - SKARDU", city: "Skardu" },
    { name: "NUSRAT PHARMA - KOTLI", city: "Kotli" },
    { name: "ATIF DISTRIBUTOR - MIRPUR AJK", city: "Mirpur AJK" },
    { name: "AHMAD SAEED MEDICINE DIS - MIANWALI", city: "Mianwali" },
    { name: "NOOR MEDICINE COMPANY - BHAKKAR", city: "Bhakkar" },
    { name: "ALI HAJVERY PHARMA - OKARA", city: "Okara" },
    { name: "PREMIER SALES PVT LTD-GILGIT", city: "Gilgit" },
    { name: "PREMIER SALES PVT LTD-SWAT", city: "Swat" },
    { name: "PREMIER SALES PVT LTD-TIMERGARA", city: "Timergara" },
    { name: "PREMIER SALES PVT LTD-MARDAN", city: "Mardan" },
    { name: "PREMIER SALES PVT LTD-SWABI", city: "Swabi" },
    { name: "PREMIER SALES PVT LTD-NOWSHERA", city: "Nowshera" },
    { name: "PREMIER SALES PVT LTD-PESHAWAR", city: "Peshawar" },
    { name: "PREMIER SALES PVT LTD-KOHAT", city: "Kohat" },
    { name: "PREMIER SALES PVT LTD-BANNU", city: "Bannu" },
    { name: "PREMIER SALES PVT LTD-D.I.KHAN", city: "DIK" },
    { name: "PREMIER SALES PVT LTD-MUZAFFARABAD", city: "Muzaffarabad" },
    { name: "PREMIER SALES PVT LTD-MANSEHRA", city: "Mansehra" },
    { name: "PREMIER SALES PVT LTD-HARIPUR", city: "Haripur" },
    { name: "PREMIER SALES PVT LTD-ABBOTTABAD", city: "Abbottabad" },
    { name: "PREMIER SALES PVT LTD-ATTOCK", city: "Attock" },
    { name: "PREMIER SALES PVT LTD-RAWALPINDI", city: "Rawalpindi" },
    { name: "PREMIER SALES PVT LTD-ISLAMABAD", city: "Islamabad" },
    { name: "PREMIER SALES PVT LTD-GUJJAR KHAN", city: "Gujjar Khan" },
    { name: "PREMIER SALES PVT LTD-HASSAN ABDAL", city: "Hassan Abdal" },
    { name: "PREMIER SALES PVT LTD-JHELUM", city: "Jhelum" },
    { name: "PREMIER SALES PVT LTD-CHAKWAL", city: "Chakwal" },
    { name: "PREMIER SALES PVT LTD-KHARIAN", city: "Kharian" },
    { name: "PREMIER SALES PVT LTD-GUJRAT", city: "Gujrat" },
    { name: "PREMIER SALES PVT LTD-MANDI BAHAUDI", city: "Mandi Bahauddin" },
    { name: "PREMIER SALES PVT LTD-SIALKOT", city: "Sialkot" },
    { name: "PREMIER SALES PVT LTD-SHAKARGARH", city: "Shakargarh" },
    { name: "PREMIER SALES PVT LTD-NAROWAL", city: "Narowal" },
    { name: "PREMIER SALES PVT LTD-SARGODHA", city: "Sargodha" },
    { name: "PREMIER SALES PVT LTD-HAFIZABAD", city: "Hafizabad" },
    { name: "PREMIER SALES PVT LTD-GUJRANWALA", city: "Gujranwala" },
    { name: "PREMIER SALES PVT LTD-LAHORE", city: "Lahore" },
    { name: "PREMIER SALES PVT LTD-FATEH GARH-LH", city: "Lahore" },
    { name: "PREMIER SALES PVT LTD-KASUR", city: "Kasur" },
    { name: "PREMIER SALES PVT LTD-SHEIKHUPURA", city: "Sheikhupura" },
    { name: "PREMIER SALES PVT LTD-FAISALABAD", city: "Faisalabad" },
    { name: "PREMIER SALES PVT LTD-JHANG", city: "Jhang" },
    { name: "PREMIER SALES PVT LTD-SHORKOT", city: "Shorkot" },
    { name: "PREMIER SALES PVT LTD-SAHIWAL", city: "Sahiwal" },
    { name: "PREMIER SALES PVT LTD-BAHAWALNAGAR", city: "Bahawalnagar" },
    { name: "PREMIER SALES PVT LTD-BUREWALA", city: "Burewala" },
    { name: "PREMIER SALES PVT LTD-MULTAN", city: "Multan" },
    { name: "PREMIER SALES PVT LTD-BAHAWALPUR", city: "Bahawalpur" },
    { name: "PREMIER SALES PVT LTD-KHANEWAL", city: "Khanewal" },
    { name: "PREMIER SALES PVT LTD-LAYYAH", city: "Layyah" },
    { name: "PREMIER SALES PVT LTD-D.G.KHAN", city: "DGK" },
    { name: "PREMIER SALES PVT LTD-R.Y.KHAN", city: "RYK" },
    { name: "PREMIER SALES PVT LTD-QUETTA", city: "Quetta" },
    { name: "PREMIER SALES PVT LTD-JACOBABAD", city: "Jacobabad" },
    { name: "PREMIER SALES PVT LTD-GHOTKI", city: "Ghotki" },
    { name: "PREMIER SALES PVT LTD-SUKKUR", city: "Sukkur" },
    { name: "PREMIER SALES PVT LTD-LARKANA", city: "Larkana" },
    { name: "PREMIER SALES PVT LTD-DADU", city: "Dadu" },
    { name: "PREMIER SALES PVT LTD-NAWABSHAH", city: "Nawabshah" },
    { name: "PREMIER SALES PVT LTD-NAUSHERO FERO", city: "Naushero Feroz" },
    { name: "PREMIER SALES PVT LTD-MITHI", city: "Mithi" },
    { name: "PREMIER SALES PVT LTD-UMERKOT", city: "Umerkot" },
    { name: "PREMIER SALES PVT LTD-MIRPURKHAS", city: "Mirpurkhas" },
    { name: "PREMIER SALES PVT LTD-BADIN", city: "Badin" },
    { name: "PREMIER SALES PVT LTD-SHAHDADPUR", city: "Shahdadpur" },
    { name: "PREMIER SALES PVT LTD-THATTA", city: "Thatta" },
    { name: "PREMIER SALES PVT LTD-HYDERABAD", city: "Hyderabad" },
    { name: "PREMIER SALES PVT LTD-GWADAR", city: "Gwadar" },
    { name: "PREMIER SALES PVT LTD-S.I.T.E AREA", city: "Karachi" },
    { name: "PREMIER SALES PVT LTD-FB AREA", city: "Karachi" },
    { name: "PREMIER SALES PVT LTD-KORANGI", city: "Karachi" }
];

const SERVICE_PROVIDERS = [
    { name: "AIM DISTRIBUTOR FAISALABAD", city: "Faisalabad" },
    { name: "NOVIPHARM ENTERPRISES", city: "Karachi" },
    { name: "M. ABDULLAH ENTERPRISES", city: "Karachi" },
    { name: "ONCOCARE PHARMACY", city: "Lahore" },
    { name: "RIZWAN MEDICINE COMPANY", city: "Multan" },
    { name: "JUNAID MEDICOSE DISTRIBUTORS", city: "Peshawar" },
    { name: "BURHAN TRADERS", city: "Quetta" },
    { name: "LIFE LINE DISTRIBUTORS", city: "Rawalpindi" },
    { name: "S.K. DISTRIBUTOR-ISLAMABAD INST DIS", city: "Rawalpindi" },
    { name: "Burhan Traders", city: "Peshawar" },
    { name: "Pakistan Vaccine House", city: "Lahore" }
];

const KAMS = [
    {
        code: "10596",
        name: "Muhammad Asad Javed",
        position: "Key Account Manager",
        email: "MASADJAWED@HOTMAIL.COM",
        phone: "0345-2504290",
        city: "Karachi",
        address: "House No. 11, Sector 36/A, Area J,, Korangi No. 5,, Karachi, Pakistan"
    },
    {
        code: "10574",
        name: "Muhammad Fawad Murad",
        position: "Key Account Manager",
        email: "FAWADMURAD000@GMAIL.COM",
        phone: "0303-0021959",
        city: "Karachi",
        address: "House # C 58/4,, Khuwaja Chowk, Kalaboard Malir,, Karachi, Pakistan"
    },
    {
        code: "4647",
        name: "Syed Ali Raza",
        position: "Sales Manager",
        email: "ROZE599@YAHOO.COM",
        phone: "0332-4544725",
        city: "Lahore",
        address: "House # 328, Block-3, Sector D 2, Green Town, Lahore., Lahore, Pakistan"
    },
    {
        code: "10572",
        name: "Muhammad Aftab Sajid",
        position: "Key Account Manager",
        email: "AFTABSAJID77@GMAIL.COM",
        phone: "0304-9541191",
        city: "Multan",
        address: "House # 5, Street # 2A,, Mayo Colony,, Multan, Pakistan"
    },
    {
        code: "10578",
        name: "Muhammad Waseem",
        position: "Key Account Manager",
        email: "DRWASEEM403@GMAIL.COM",
        phone: "0301-7959407",
        city: "Faisalabad",
        address: "House # 6, Street # 2,, Main Road, Kokiyan wala,, Faisalabad, Pakistan"
    },
    {
        code: "10591",
        name: "Muhammad Waqar",
        position: "Key Account Manager",
        email: "CH.WAQAR320@GMAIL.COM",
        phone: "0320-4058899",
        city: "Lahore",
        address: "House No. 88, Street No. 5, Hashmat Str,, Farooq Azam Colony, Bilal Road,, Lahore, Pakistan"
    },
    {
        code: "10605",
        name: "Hassan Abbas",
        position: "Key Account Manager",
        email: "HASSANABBAS1003@GMAIL.COM",
        phone: "0335-2799926",
        city: "Lahore",
        address: "Bhalla Chowk, Block E,, Phase 1, Johar Town,, Lahore, Pakistan"
    },
    {
        code: "4728",
        name: "Tahir Mehmood",
        position: "Sales Manager",
        email: "MTAHIREVO@GMAIL.COM",
        phone: "0321-5403784",
        city: "Rawalpindi",
        address: "H.NO. 182, Block D Satelite Town, Near Tehzeeb Bakery Commercial Market, Rawalpindi, Pakistan"
    },
    {
        code: "10573",
        name: "Muhammad Aamir Latif",
        position: "Key Account Manager",
        email: "AAMIRLATIF006@GMAIL.COM",
        phone: "0343-9100632",
        city: "Peshawar",
        address: "Mohallah Garibabad No 2, Bilal Masjid,, Near Army Supply Depot,, Peshawar, Pakistan"
    },
    {
        code: "10576",
        name: "Hanook.",
        position: "Key Account Manager",
        email: "HM.KHOKHAR93@GMAIL.COM",
        phone: "0305-5584437",
        city: "Islamabad",
        address: "Mohallah Hajveri,, Kala Gujran,, Islamabad, Pakistan"
    },
    {
        code: "10580",
        name: "Malik Muhammad Awais Khan",
        position: "Key Account Manager",
        email: "MALIKAWAIS9740@GMAIL.COM",
        phone: "0317-9740680",
        city: "Peshawar",
        address: "Mohallah High School Akber Pura,, Dak-khana Akber Pura,, Pabbi Nosherah,, Peshawar, Pakistan"
    },
    {
        code: "10874",
        name: "Qudrat Ullah Khan",
        position: "Assistant Key Account Manager",
        email: "DOCQUDRAT@GMAIL.COM",
        phone: "0307-5604409",
        city: "Islamabad",
        address: "Lane F, H.No. 14, Street 8,, Irfanabad, Islamabad, Pakistan"
    }
];

async function main() {
    console.log("Starting Master Data Overhaul...");

    // 1. Clear Data
    console.log("Clearing existing record relations...");
    // Clear relations first to avoid foreign key issues
    await prisma.notification.deleteMany({});
    await prisma.inventory.deleteMany({});

    // For Orders and Users, we might want to keep history but since the user said "Remove all Distributors from Portal" 
    // and "Remove all KAMs from System", we will be thorough. 
    // However, orders depend on patients and users. 
    // If we delete all distributors, orders with distributorId will fail unless we nullify.
    await prisma.order.updateMany({ data: { distributorId: null, kamId: null } });
    await prisma.user.updateMany({ data: { distributorId: null } });

    console.log("Deleting existing Distributors...");
    await prisma.distributor.deleteMany({});

    console.log("Deleting existing KAMs and Sub-Admins...");
    // Protected Admin Emails (add any if known, currently based on common patterns)
    const protectedEmails = ['admin@pharmevo.biz'];
    await prisma.user.deleteMany({
        where: {
            role: { in: ['KAM', 'SUB_ADMIN'] },
            email: { notIn: protectedEmails }
        }
    });

    // 2. Helper for Cities
    const getOrCreateCity = async (name: string) => {
        return prisma.city.upsert({
            where: { name },
            update: {},
            create: { name }
        });
    };

    // 3. Helper for Areas
    const getOrCreateArea = async (name: string, cityId: string) => {
        return prisma.area.upsert({
            where: { name_cityId: { name, cityId } },
            update: {},
            create: { name, cityId }
        });
    };

    // 4. Add Distributors
    console.log("Adding Premier Distributors...");
    for (const d of PREMIER_DISTRIBUTORS) {
        const city = await getOrCreateCity(d.city);
        const area = await getOrCreateArea("General", city.id);
        const distributor = await prisma.distributor.create({
            data: {
                name: d.name,
                cityId: city.id,
                areaId: area.id,
                type: 'PREMIER'
            }
        });
        await prisma.inventory.create({
            data: { distributorId: distributor.id, totalStock: 0, availableStock: 0 }
        });
    }

    console.log("Adding Service Providers...");
    for (const s of SERVICE_PROVIDERS) {
        const city = await getOrCreateCity(s.city);
        const area = await getOrCreateArea("General", city.id);
        const provider = await prisma.distributor.create({
            data: {
                name: s.name,
                cityId: city.id,
                areaId: area.id,
                type: 'SERVICE_PROVIDER'
            }
        });
        await prisma.inventory.create({
            data: { distributorId: provider.id, totalStock: 0, availableStock: 0 }
        });
    }

    // 5. Add KAMs
    console.log("Adding new KAMs and Sales Managers...");
    for (const k of KAMS) {
        const city = await getOrCreateCity(k.city);
        // Map roles
        let role = "KAM";
        if (k.position === "Sales Manager") role = "SUB_ADMIN";

        await prisma.user.create({
            data: {
                employeeCode: k.code,
                name: k.name,
                email: k.email,
                phone: k.phone,
                cityId: city.id,
                address: k.address,
                role: role as any,
                password: "password123" // Default password
            }
        });
    }

    console.log("Master Data Overhaul Completed Successfully!");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
