import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcryptjs";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🌱 Seeding ADESTRACC database...\n");

  // ── 1. Users ───────────────────────────────────────────────
  console.log("👤 Creating users...");
  const adminPassword = await bcrypt.hash("Admin@1234", 12);
  await prisma.user.upsert({
    where: { email: "admin@adestracc.com" },
    update: {},
    create: {
      email: "admin@adestracc.com",
      password: adminPassword,
      name: "ADESTRACC Admin",
      role: "ADMIN",
    },
  });

  const editorPassword = await bcrypt.hash("Editor@1234", 12);
  await prisma.user.upsert({
    where: { email: "editor@adestracc.com" },
    update: {},
    create: {
      email: "editor@adestracc.com",
      password: editorPassword,
      name: "Content Editor",
      role: "EDITOR",
    },
  });
  console.log("   ✓ Admin and Editor accounts created\n");

  // ── 2. Impact Stats ────────────────────────────────────────
  console.log("📊 Creating impact stats...");
  const stats = [
    { label: "Ethnic Groups United", value: "36+",  description: "All Delta State ethnicities represented",       icon: "Users"     },
    { label: "Gazetted Chiefs",       value: "500+", description: "Member chiefs across all 25 LGAs",             icon: "Crown"     },
    { label: "LGAs Represented",      value: "25",   description: "Full coverage of Delta State",                 icon: "MapPin"    },
    { label: "Federal Partners",      value: "4",    description: "NDDC, INEC, NOA, FMACTCE",                    icon: "Handshake" },
    { label: "Years of Service",      value: "40+",  description: "Serving Delta State communities since 1983",   icon: "Calendar"  },
    { label: "Conflicts Resolved",    value: "50+",  description: "Inter-community disputes mediated peacefully", icon: "Shield"    },
  ];
  for (const s of stats) {
    const existing = await prisma.impactStat.findFirst({ where: { label: s.label } });
    if (!existing) await prisma.impactStat.create({ data: s });
  }
  console.log("   ✓ 6 impact stats created\n");

  // ── 3. Partners ────────────────────────────────────────────
  console.log("🤝 Creating partners...");
  const partners = [
    { name: "Federal Ministry of Arts, Culture, Tourism & Creative Economy", logoUrl: null, website: "https://fmactce.gov.ng"  },
    { name: "Niger Delta Development Commission (NDDC)",                      logoUrl: null, website: "https://nddc.gov.ng"     },
    { name: "National Orientation Agency (NOA)",                              logoUrl: null, website: "https://noa.gov.ng"      },
    { name: "Independent National Electoral Commission (INEC)",               logoUrl: null, website: "https://inecnigeria.org" },
  ];
  for (const p of partners) {
    const existing = await prisma.partner.findFirst({ where: { name: p.name } });
    if (!existing) await prisma.partner.create({ data: p });
  }
  console.log("   ✓ 4 federal partners created\n");

  // ── 4. News Articles ───────────────────────────────────────
  console.log("📰 Creating news articles...");
  const articles = [
    {
      title:       "ADESTRACC Partners with NDDC for Youth Cultural Engagement",
      excerpt:     "New initiative to promote youth participation in cultural preservation activities across all 25 LGAs of Delta State.",
      content:     "The Association of Delta State Traditional Council of Chiefs has formalised a new partnership with the Niger Delta Development Commission (NDDC) to drive youth engagement in cultural preservation. The initiative, announced at the ADESTRACC Secretariat in Asaba, will fund community-based cultural programmes targeting young people between the ages of 15 and 35 across all local government areas. Speaking at the launch, the President General of ADESTRACC described the partnership as a milestone in the association's mission to ensure that Delta State's rich heritage is passed on to the next generation.",
      imageUrl:    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
      publishedAt: new Date("2025-04-15"),
    },
    {
      title:       "Annual Convention of Chiefs Holds in Asaba",
      excerpt:     "Over 200 gazetted chiefs from across Delta State convened to discuss grassroots development strategies and cultural preservation.",
      content:     "More than 200 gazetted traditional chiefs representing all ethnic groups and local government areas of Delta State gathered in Asaba for the ADESTRACC Annual Convention. The two-day event featured discussions on community development, inter-ethnic peace-building, and the role of traditional institutions in Nigeria's democratic governance. Resolutions passed at the convention included a call for increased government funding for cultural festivals and a joint committee on heritage site preservation in partnership with the State Ministry of Culture and Tourism.",
      imageUrl:    "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
      publishedAt: new Date("2025-03-10"),
    },
    {
      title:       "Tourism Promotion Drive Launched Across Delta Communities",
      excerpt:     "ADESTRACC unveils a new campaign to showcase Delta State heritage tourism to a national and global audience.",
      content:     "ADESTRACC has officially launched its Delta Heritage Tourism Campaign, a coordinated effort to position Delta State as a premier cultural tourism destination. The campaign includes a digital content drive featuring traditional festivals, historic sites, and the stories of renowned chiefs across the state's 36+ ethnic groups. The association is working with the Federal Ministry of Arts, Culture, Tourism & Creative Economy and private sector partners to create tourism packages that will attract both domestic and international visitors to Delta State communities.",
      imageUrl:    "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80",
      publishedAt: new Date("2025-02-20"),
    },
  ];
  for (const a of articles) {
    const existing = await prisma.newsArticle.findFirst({ where: { title: a.title } });
    if (!existing) await prisma.newsArticle.create({ data: a });
  }
  console.log("   ✓ 3 news articles created\n");

  // ── 5. Gallery Images ──────────────────────────────────────
  console.log("🖼️  Creating gallery images...");
  const gallery = [
    { title: "Royal Court Assembly",       category: "Chiefs Assembly",      imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80", description: "Annual assembly of gazetted chiefs at the ADESTRACC Secretariat, Asaba."       },
    { title: "Heritage Cultural Festival", category: "Cultural Festival",     imageUrl: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80", description: "The ADESTRACC Annual Cultural Festival celebrating Delta State's rich diversity." },
    { title: "NDDC Partnership Forum",     category: "Partners",              imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80", description: "Formal signing of the ADESTRACC-NDDC grassroots development partnership."       },
    { title: "Community Development",      category: "Community Development", imageUrl: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80", description: "Chiefs and community leaders at a grassroots development forum in Warri."         },
    { title: "Traditional Regalia",        category: "Heritage",              imageUrl: "https://images.unsplash.com/photo-1524069290683-0457abfe42c3?w=800&q=80", description: "Exhibiting the ceremonial attire and regalia of Delta State's ethnic groups."    },
    { title: "Youth Cultural Program",     category: "Community Development", imageUrl: "https://images.unsplash.com/photo-1526976668912-1a811878dd37?w=800&q=80", description: "Young participants learning traditional crafts at the ADESTRACC youth forum."   },
  ];
  for (const g of gallery) {
    const existing = await prisma.galleryImage.findFirst({ where: { title: g.title } });
    if (!existing) await prisma.galleryImage.create({ data: g });
  }
  console.log("   ✓ 6 gallery images created\n");

  // ── 6. Videos ──────────────────────────────────────────────
  console.log("▶️  Creating video items...");
  const videos = [
    { title: "ADESTRACC Annual Convention 2024",              videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", thumbnail: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80", description: "Highlights from the 2024 ADESTRACC Annual Convention held in Asaba, Delta State."          },
    { title: "Cultural Heritage Preservation in Delta State", videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", thumbnail: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80", description: "An overview of ADESTRACC's ongoing efforts to document and preserve Delta heritage." },
    { title: "NDDC-ADESTRACC Partnership Launch Ceremony",    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80", description: "Official launch of the NDDC partnership for grassroots development programs."             },
  ];
  for (const v of videos) {
    const existing = await prisma.videoItem.findFirst({ where: { title: v.title } });
    if (!existing) await prisma.videoItem.create({ data: v });
  }
  console.log("   ✓ 3 video items created\n");

  console.log("✅ Seed complete!");
  console.log("─────────────────────────────────────────────────────");
  console.log("   Admin:   admin@adestracc.com  / Admin@1234");
  console.log("   Editor:  editor@adestracc.com / Editor@1234");
  console.log("─────────────────────────────────────────────────────");
}

main()
  .catch((e) => { console.error("❌ Seed failed:", e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });