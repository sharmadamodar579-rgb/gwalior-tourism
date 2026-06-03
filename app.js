// Landmark Data for Gwalior Tour
const landmarks = [
  {
    id: 0,
    name: "Gwalior Fort",
    category: "historical",
    built: "8th Century AD",
    rating: 4.8,
    coords: [26.2294, 78.1691],
    timings: "06:00 AM - 05:30 PM",
    fee: "₹75 (Indians) | ₹250 (Foreigners)",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/93/Main_entrance_%26_Man_Mandir%2C_Gwalior_Fort..jpg",
    description: "Described as the 'gem amongst fortresses in India' by Emperor Babur, this imposing hill fort stands majestically on a sandstone plateau. The fort dominates the city skyline and holds structural masterpieces, representing spectacular Hindu architecture and military strength.",
    highlights: [
      "Man Mandir Palace's famous blue-tiled exterior walls",
      "Stunning panoramic views of Gwalior city from the ramparts",
      "Ancient carvings, deep water tanks, and structural cellars",
      "Spectacular evening Sound & Light Show"
    ],
    history_long: "Gwalior Fort is one of the most historic forts in central India, built in two parts across different eras. The first portion, consisting of the main fortifications, was constructed in the early 8th century by Surya Sen. The second part, including the majestic Man Mandir Palace and Elephant Gate, was built in the late 15th century by Raja Man Singh Tomar of the Tomar Dynasty. Over centuries, the fort was held by the Tomars, Mughals, Marathas, British, and finally the Scindias, making it a witness to major turning points in Indian history.",
    tips: [
      "Hire an official guide at the entrance to understand the hidden underground chambers.",
      "Wear comfortable walking shoes; the fort complex is vast and requires plenty of walking.",
      "Visit in the late afternoon to catch the sunset, then stay for the Sound & Light show.",
      "Carry water bottles as there are limited shops inside the main palace area."
    ],
    trivia: "The fort walls house the famous Chaturbhuj Temple, which contains a stone inscription showing the number zero (0) carved in 876 AD. This is widely recognized as one of the oldest written records of zero as a mathematical placeholder in human history."
  },
  {
    id: 1,
    name: "Jai Vilas Palace",
    category: "historical",
    built: "1874 AD",
    rating: 4.7,
    coords: [26.2045, 78.1692],
    timings: "10:00 AM - 05:00 PM (Closed Wednesdays)",
    fee: "₹150 (Indians) | ₹800 (Foreigners)",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/08/Jai_Vilas_Palace_%28_Scindia_Palace%29.jpg",
    description: "A testament to grand nineteenth-century royal luxury, Jai Vilas Palace is a sprawling European-style estate. Built by Maharaja Jayajirao Scindia, it features Tuscan, Italian, and Corinthian architectural styles, housing a massive museum of royal artifacts.",
    highlights: [
      "The legendary miniature silver train that carries brandy and cigars on the dining table",
      "Durbar Hall, decorated with 560 kg of gold leaf gilding",
      "Two massive 3.5-ton chandeliers in the main reception hall",
      "Gilded royal carriage, vintage weaponry, and personal items of the Scindia rulers"
    ],
    history_long: "Designed by Sir Michael Filose and built in 1874, Jai Vilas Palace cost approximately 1 Crore rupees in the 19th century. It was constructed to welcome King Edward VII (then Prince of Wales) during his tour of India. A portion of the palace remains the private residence of the descendants of the Scindia dynasty, while a large section serves as the 'Jiwajirao Scindia Museum', open to the public to showcase royal heritage.",
    tips: [
      "A separate camera ticket (₹100) is required if you want to take photos inside.",
      "The museum is closed on Wednesdays, so plan your itinerary accordingly.",
      "Spend at least 2 hours to fully explore the 35 rooms open to visitors.",
      "Check out the dining table closely to see the tracks of the miniature silver train."
    ],
    trivia: "Before hanging the two massive 3.5-ton chandeliers in the Durbar Hall, engineers were unsure if the ceiling could support the weight. To test it, ten elephants were walked up a giant ramp onto the roof of the Durbar Hall to verify its structural integrity."
  },
  {
    id: 2,
    name: "Gopachal Parvat",
    category: "temples",
    built: "7th - 15th Century AD",
    rating: 4.6,
    coords: [26.2215, 78.1668],
    timings: "06:00 AM - 07:00 PM",
    fee: "Free Entry",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e2/0121521_Gopachal_Patthar_ki_Baoli_Jain_monuments%2C_Gwalior_04.jpg",
    description: "Carved into the steep sandstone cliffs of the Gwalior Fort hill, Gopachal Parvat features a spectacular group of rock-cut Jain monuments. These caves contain colossal statues of Jain Tirthankaras in sitting and standing meditative postures.",
    highlights: [
      "Colossal 47-foot statue of the first Tirthankara, Lord Adinatha",
      "Dozens of smaller rock caves containing stone carvings of Jain saints",
      "A peaceful atmosphere cut off from the noise of the main city",
      "Fascinating historical rock carvings that line the approach road"
    ],
    history_long: "The rock carvings at Gopachal Parvat were sculpted between the 7th and 15th centuries AD, with a major period of carving taking place during the reign of the Tomar kings (specifically Raja Dungar Singh and Kirti Singh). In 1527, Mughal Emperor Babur ordered the destruction of these statues, defacing many of them. Fortunately, the massive size of the figures meant they could not be fully demolished, and many were later restored by the Jain community.",
    tips: [
      "Since this is a sacred site, dress modestly when visiting the shrines.",
      "The climb is relatively short but steep, so take your time and carry water.",
      "Visit early in the morning when the sun lights up the carvings on the rock face.",
      "Watch out for local monkeys along the pathways; keep food items tucked away."
    ],
    trivia: "Unlike many rock temples, the statues of Gopachal are carved directly out of the cliffs in a vertical manner. The largest standing image of Lord Adinatha is sculpted inside a cave that is completely carved from a single monolithic sandstone rock face."
  },
  {
    id: 3,
    name: "Sun Temple (Surya Mandir)",
    category: "temples",
    built: "1988 AD",
    rating: 4.5,
    coords: [26.2163, 78.2049],
    timings: "06:30 AM - 06:00 PM",
    fee: "Free Entry",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b1/0121621_Sun_Temple%2C_Gwalior_Madhya_Pradesh_025.jpg",
    description: "A gorgeous modern sanctuary, the Gwalior Sun Temple is inspired by the world-famous Sun Temple at Konark, Odisha. Built of red sandstone and white marble, the temple is dedicated to the Sun God (Surya) and stands surrounded by manicured lawns.",
    highlights: [
      "Impeccable red sandstone exterior walls with intricate carvings of deities",
      "Stunning interiors made of pure white marble that creates a serene atmosphere",
      "The chariot-like architecture with stone-carved wheels and horses",
      "Serene landscaped gardens perfect for morning peace and photography"
    ],
    history_long: "Constructed in 1988 by the industrialist G.D. Birla (Birla Group), the Sun Temple is a modern addition to Gwalior's rich architecture. It is built as a replica of Konark's famous chariot temple. Over the years, the temple has become a major spiritual retreat and a popular spot for both locals and travelers seeking peace and architectural beauty.",
    tips: [
      "The temple is highly peaceful in the early morning; it is a great spot to practice meditation.",
      "Footwear is not allowed inside the main temple area; shoe stands are available at the entrance.",
      "Take time to walk around the exterior walls to observe the meticulous stone carvings.",
      "The temple gardens are beautifully illuminated around sunset."
    ],
    trivia: "The temple has 24 stone wheels representing the hours of the day (or fortnights of the year), pulled by 7 carved horses that represent the seven days of the week, reflecting the solar cycle in Hindu mythology."
  },
  {
    id: 4,
    name: "Tomb of Tansen",
    category: "cultural",
    built: "Late 16th Century",
    rating: 4.4,
    coords: [26.2241, 78.1884],
    timings: "08:00 AM - 06:00 PM",
    fee: "Free Entry",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Tomb_of_Tansen_-Gwalior_-Madhya_Pradesh_-IMG_1207.jpg",
    description: "The memorial of Mian Tansen, the legendary singer and musician of Akbar's court, lies in a quiet Mughal garden. Tansen is celebrated as the father of Hindustani classical music, and his tomb is a pilgrimage site for musicians.",
    highlights: [
      "Elegant Mughal sandstone mausoleum with delicate screen work (jaali)",
      "The neighboring grand tomb of Sufi saint Hazrat Mohammad Ghaus",
      "A ancient tamarind tree whose leaves are believed to possess magical properties",
      "Host of the prestigious annual Gwalior Tansen Music Festival"
    ],
    history_long: "Built during the reign of Emperor Akbar, the tomb of Tansen is a simple pillared pavilion reflecting classic Mughal-Islamic style. It sits in a walled complex built next to the grand, octagonal tomb of Tansen's spiritual guide and Sufi master, Hazrat Mohammad Ghaus. Gwalior became the cradle of Indian classical music due to Tansen's legacy, establishing the famous Gwalior Gharana.",
    tips: [
      "Visit during November or December to witness the Tansen Music Festival, which hosts classical maestros from all over the world.",
      "Combine this visit with the Tomb of Mohammad Ghaus in the same courtyard.",
      "Local guides can recount beautiful folklore about Tansen's voice summoning rain (Raag Megh Malhar) or lighting lamps (Raag Deepak).",
      "Taxis can drop you right at the entrance gate of the tomb complex."
    ],
    trivia: "According to local legend, singers and musicians visit the tomb to chew the leaves of the tamarind tree growing next to Tansen's grave. It is believed that eating these leaves sweetens the voice and gives the singer perfect pitch."
  },
  {
    id: 5,
    name: "Saas Bahu Temple (Sahasrabahu)",
    category: "temples",
    built: "11th Century AD",
    rating: 4.8,
    coords: [26.2292, 78.1724],
    timings: "06:00 AM - 05:30 PM",
    fee: "Included in Gwalior Fort ticket",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Sahasra_bahu_temple_Gwalior_fort.jpg",
    description: "An architectural marvel constructed in 1092 AD, this temple is dedicated to Lord Vishnu (Sahasrabahu, meaning the one with a thousand arms). Popularly known as Saas Bahu Temple, it exhibits intricately carved pillars, ceilings, and figures of deities without using mortar.",
    highlights: [
      "Beautiful twin temple structure (larger and smaller temples)",
      "Highly intricate carvings on ceilings and beams representing ancient epics",
      "No mortar construction; held together strictly by gravity and interlocking stone joinery",
      "Scenic viewpoint overlooking the eastern valley of Gwalior"
    ],
    history_long: "The Sahasrabahu Temple was built by King Mahipala of the Kachchhapaghata dynasty in 1092 AD. The name 'Saas Bahu' is a local colloquial corruption of 'Sahasrabahu' (the thousand-armed form of Vishnu). According to folklore, the larger temple ('Saas' or mother-in-law) was constructed for the queen who worshipped Lord Vishnu, and the smaller temple ('Bahu' or daughter-in-law) was built nearby for the prince's wife who worshipped Lord Shiva.",
    tips: [
      "Check out the center ceiling of the main hall; the carving of the lotus is breathtaking.",
      "The site gets crowded with tour groups in midday; early morning offers the best photography light.",
      "Hiring a guide or reading descriptions beforehand will help you locate the hidden stories in the stone friezes.",
      "Ensure you don't climb or touch the delicate stone pillars to preserve them."
    ],
    trivia: "Despite its local name 'Saas Bahu' (Mother-in-law & Daughter-in-law), the temples have no historical connection to family relations and were entirely dedicated to Vishnu and Shiva. The interlocking style of stone masonry has allowed it to withstand earthquakes for nearly a thousand years."
  },
  {
    id: 6,
    name: "Teli Ka Mandir",
    category: "temples",
    built: "8th - 9th Century AD",
    rating: 4.7,
    coords: [26.2248, 78.1698],
    timings: "06:00 AM - 05:30 PM",
    fee: "Included in Gwalior Fort ticket",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Teli_Ka_Mandir%2C_Gwalior_Fort.JPG",
    description: "The tallest structure inside the Gwalior Fort complex, rising to a height of 100 feet. This temple is famous for its architectural style, which blends a Dravidian (Southern) barrel-vaulted roof (Valabhi style) with Northern Indian (Nagara) decorative details on its outer walls.",
    highlights: [
      "100-foot-tall monumental structure",
      "Unique combination of Dravidian barrel vault roof and Nagara wall patterns",
      "Intricately carved high-relief gateway depicting river goddesses Ganga and Yamuna",
      "Mysterious history regarding its naming and original deity"
    ],
    history_long: "Teli Ka Mandir is the oldest surviving temple inside the Gwalior Fort, built during the Pratihara Empire (likely during the reign of Mihira Bhoja in the 8th or 9th century AD). The name 'Teli Ka Mandir' translates to 'Oilman's Temple', which folklore attributes to oil merchants funding its construction. During the British era, the temple was briefly used as a soda factory and warehouse before being restored to its glory by Major Keith in 1881.",
    tips: [
      "Stand right at the gateway to capture the scale of the entrance, which is carved with elaborate figures.",
      "Look at the roof shape; it resembles a Buddhist chaitya hall or a South Indian Gopuram.",
      "There are no active deities inside, but the architectural reliefs on the walls are deeply artistic.",
      "Visit in the late afternoon to see the sandstone glow in warm orange light."
    ],
    trivia: "Teli Ka Mandir is one of the very few temples in North India that features a South Indian Dravidian style barrel roof. This indicates that Gwalior was a meeting point for architects and sculptors from across the subcontinent."
  },
  {
    id: 7,
    name: "Gurudwara Data Bandi Chhor Sahib",
    category: "temples",
    built: "1619 AD (Modern shrine 1970s)",
    rating: 4.9,
    coords: [26.2255, 78.1738],
    timings: "04:00 AM - 10:00 PM",
    fee: "Free Entry",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Gurudwara_Data_Bandi_Chodd.jpg",
    description: "A famous, historic Sikh shrine located on the Gwalior Fort hill. It is built to commemorate the release of the sixth Sikh Guru, Guru Hargobind Sahib Ji, who was imprisoned in the Gwalior Fort by Mughal Emperor Jahangir and managed to secure the freedom of 52 Hindu kings.",
    highlights: [
      "Gleaming white marble architecture with large gold domes",
      "Beautiful sacred pond (Sarovar) and quiet prayer halls",
      "Langar (free community kitchen) serving hot meals to all visitors daily",
      "Historically rich museum displaying weapons and paintings of Sikh heritage"
    ],
    history_long: "In 1619, Mughal Emperor Jahangir imprisoned Guru Hargobind Ji in the Gwalior Fort out of fear of his growing influence. During his captivity, the Guru won the respect of the jailers and the Emperor. When Jahangir agreed to release the Guru, the Guru refused to leave unless the 52 imprisoned rajput kings were freed as well. Jahangir agreed but set a condition: only those who could hold onto the Guru's cloak as he walked out would go free. The Guru had a special cloak made with 52 tassels, allowing all 52 kings to walk out to freedom. Hence, he was called 'Data Bandi Chhor' (The Liberator of Prisoners).",
    tips: [
      "Partake in the daily Langar; it is a heartwarming community experience of equality and service.",
      "Cover your head before entering the Gurudwara premises (scarves are provided at the gate for free).",
      "Take a peaceful walk around the holy pond (Sarovar) to experience the serene atmosphere.",
      "The Gurudwara looks spectacular at night when it is fully lit."
    ],
    trivia: "The festival of Diwali is celebrated by Sikhs as 'Bandi Chhor Divas' to commemorate the day Guru Hargobind Ji returned to Amritsar after freeing the 52 kings from Gwalior Fort."
  },
  {
    id: 8,
    name: "Gujari Mahal Museum",
    category: "historical",
    built: "15th Century AD",
    rating: 4.6,
    coords: [26.2345, 78.1729],
    timings: "10:00 AM - 05:00 PM (Closed Mondays)",
    fee: "₹20 (Indians) | ₹250 (Foreigners)",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/31/Sculptured_wall_of_gurjari_Mahal%2C_Gwalior.jpg",
    description: "A majestic sandstone palace built at the foot of Gwalior Fort by Raja Man Singh Tomar for his favorite queen Mrignayani (a Gujjar peasant woman). Today, it houses Gwalior's Archaeological Museum, showcasing rare sculptures dating from the 1st century BC.",
    highlights: [
      "Sandstone fortress-palace with historic inner courtyard and gates",
      "The famous 'Shalabhanjika' statue (often called the Indian Mona Lisa)",
      "Dozens of ancient statues representing Gupta, Kushan, and Pratihara art eras",
      "Collection of historical coins, inscriptions, and ancient stone weapons"
    ],
    history_long: "Raja Man Singh Tomar built the palace in the 15th century for his ninth wife, Mrignayani, who belonged to the Gujjar clan. She demanded a separate palace with a supply of water from the nearby Rai River. When the Tomar dynasty fell, the palace was used as a fort outpost. In 1920, the princely state of Gwalior converted the palace into an archaeological museum to store and display the region's ancient artistic discoveries.",
    tips: [
      "The museum is closed on Mondays; make sure to plan accordingly.",
      "To view the famous Shalabhanjika sculpture, you must ask the museum curator as it is kept in a secure vault for preservation.",
      "The stone carvings in the central open courtyard are excellent subjects for detail photography.",
      "A nominal camera fee is charged at the counter."
    ],
    trivia: "The Shalabhanjika sculpture is a masterpieces of Indian art, showing a celestial damsel (yakshi) standing under a branch. It is kept locked in a vault and was once flown to France for an international exhibition under high security."
  },
  {
    id: 9,
    name: "Rani Laxmi Bai Samadhi",
    category: "cultural",
    built: "1858 AD",
    rating: 4.6,
    coords: [26.2208, 78.1774],
    timings: "06:00 AM - 08:00 PM",
    fee: "Free Entry",
    image: "https://images.unsplash.com/photo-1627856013091-fed6e4e30025?auto=format&fit=crop&w=800&q=80",
    description: "A peaceful garden memorial located in the Phool Bagh area, dedicated to Rani Laxmi Bai of Jhansi. She was one of the leading figures of the Indian Rebellion of 1857 and died fighting British forces in Gwalior at the age of 29.",
    highlights: [
      "Statue of Rani Laxmi Bai riding a horse with her sword raised",
      "A simple and quiet cenotaph (Samadhi) where her final rites were performed",
      "Beautifully manicured gardens and quiet walking tracks",
      "Nearby historic Phool Bagh structures and parks"
    ],
    history_long: "Rani Laxmi Bai fled to Gwalior after Jhansi fell to British forces. Along with Tatya Tope, she captured the Gwalior Fort. On June 17, 1858, dressed in soldier's attire, she fought valiantly against the British Hussars near Kotah-ki-Sarai in Gwalior. Mortally wounded, she did not want the British to capture her body, so she requested local sages to cremate her immediately. Her samadhi was built at the site of her cremation.",
    tips: [
      "The memorial is located in the center of the city inside Phool Bagh, making it very easy to reach.",
      "Combine this visit with Gwalior Zoo and Phool Bagh Palace, which are just a walk away.",
      "Spend some quiet time in the surrounding park, which is popular for evening walks.",
      "Read the information boards around the statue to learn about her final battle in Gwalior."
    ],
    trivia: "Rani Laxmi Bai's final battle took place near the Gwalior canal. She was cremated by local villagers in a pile of grass under a tamarind tree so that the advancing British forces could not identify or touch her body."
  },
  {
    id: 10,
    name: "Maharaj Bada (Jiwaji Chowk)",
    category: "cultural",
    built: "19th - 20th Century",
    rating: 4.5,
    coords: [26.2081, 78.1593],
    timings: "09:00 AM - 10:00 PM (Best in evening)",
    fee: "Free Entry",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Maharaj_Bada_Gwalior.jpg",
    description: "The vibrant main city square of Gwalior, Maharaj Bada is famous for housing seven historical buildings representing seven different architectural styles—including Roman, Gothic, Greek, Maratha, and Indo-Islamic. It is the commercial heart of the city.",
    highlights: [
      "Seven historical buildings of different architectures around a single square",
      "Victoria Market building, a majestic Gothic structure",
      "The central garden with a large statue of Maharaja Jiwajirao Scindia",
      "Vibrant local shops selling famous Chanderi sarees and Gwalior snacks"
    ],
    history_long: "Developed by the Scindia rulers as the civic center of Gwalior, Jiwaji Chowk (commonly called Maharaj Bada) was designed to show the dynasty's global architectural taste. Around the circular plaza, they built the Gwalior State Bank (Roman style), the Victoria Market (Gothic style), the Post Office (Grecian style), the Town Hall (Indo-Saracenic), and palaces in Maratha and Rajasthani styles. Today, it remains the bustling heart of commerce.",
    tips: [
      "The Bada is highly congested during peak hours; visiting on foot or using an auto-rickshaw is highly recommended.",
      "It is the best place in Gwalior to shop for handloom Chanderi and Maheshwari sarees at local showrooms.",
      "Taste the street food around the Bada, especially the spicy kachoris and Gwalior's famous sweets.",
      "Go in the evening when the heritage buildings are beautifully lit up."
    ],
    trivia: "Maharaj Bada is one of the very few public squares in the world where you can stand in a single spot and turn 360 degrees to see seven completely different architectural styles spanning Europe and Asia."
  },
  {
    id: 11,
    name: "Tigra Dam & Lake",
    category: "cultural",
    built: "1916 AD",
    rating: 4.4,
    coords: [26.2167, 77.9942],
    timings: "09:00 AM - 05:00 PM",
    fee: "Free entry to dam | Boating starting from ₹50",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/29/Tighra_Dam_Gwalior.JPG",
    description: "A freshwater reservoir and dam situated on the Sank River, about 23 km from Gwalior city. Tigra Dam is Gwalior's favorite outdoor and recreational getaway, offering beautiful lakeside scenery, bird watching, and exciting boating activities.",
    highlights: [
      "Massive freshwater lake surrounded by low-lying rocky hills",
      "Exciting boating options including speedboats, paddleboats, and houseboats",
      "Popular spot for bird watching, especially during winter months",
      "Perfect location for family picnics and sunset viewing"
    ],
    history_long: "Tigra Dam was constructed in 1916 under the rule of Maharaja Madhavrao Scindia to provide drinking water to the growing city of Gwalior and irrigate nearby agricultural lands. The dam faced a catastrophic structural failure in 1917 shortly after construction due to water pressure, causing major flooding. It was subsequently redesigned and rebuilt in 1929 with advanced masonry reinforcements.",
    tips: [
      "The dam is situated 23 km west of the city; it is best to hire a private taxi or drive your own vehicle.",
      "Visit during the winter months (November to February) to see migratory birds from Siberia.",
      "Try the speedboat ride for a thrilling experience across the massive lake.",
      "Carry your own picnic snacks and mats as dining facilities near the dam are basic."
    ],
    trivia: "Tigra Dam's initial breach in 1917 released billions of gallons of water, flooding the lower parts of Gwalior. The reconstruction used an innovative curved gravity masonry wall that remains fully operational to this day."
  },
  {
    id: 12,
    name: "Italian Garden",
    category: "cultural",
    built: "Early 20th Century",
    rating: 4.3,
    coords: [26.2205, 78.1805],
    timings: "06:00 AM - 07:00 PM",
    fee: "Free Entry",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Italian_Garden.jpg",
    description: "Located inside the historic Phool Bagh premises, the Italian Garden is a beautifully manicured landscape showing classic European aesthetic designs. It is filled with stone fountains, stone pathways, and lush trees, offering a peaceful sanctuary.",
    highlights: [
      "Beautiful vintage Italian-style water fountains",
      "Clean, tranquil stone pathways perfect for morning walks",
      "Lush green grass lawns surrounded by ancient trees",
      "Located near the Gwalior Zoo and Phool Bagh Palace"
    ],
    history_long: "The Italian Garden was constructed in the early 20th century under the Scindia rulers, who were passionate about European neoclassical architecture and landscaping. It was designed to mimic the grand renaissance gardens of Italy, featuring geometrical layouts and stone water channels. Over time, it has evolved into a popular public park where citizens and visitors enjoy a touch of vintage European gardening in Gwalior.",
    tips: [
      "Visit during early morning or late evening to enjoy the coolest, most peaceful atmosphere.",
      "Combine your visit with the Gwalior Zoo and the Rani Laxmi Bai memorial nearby.",
      "It is an excellent spot for quiet reading, yoga, or photography.",
      "Do not litter; keep this historic garden clean."
    ],
    trivia: "The garden features a network of stone channels that were historically connected to an underground gravity-fed water channel system to feed the fountains without modern mechanical pumps."
  },
  {
    id: 13,
    name: "Chausath Yogini Temple (Mitawali)",
    category: "temples",
    built: "11th Century AD",
    rating: 4.8,
    coords: [26.4358, 78.2561],
    timings: "08:00 AM - 05:00 PM",
    fee: "Free Entry",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Chausath_Yogini_Mitawali_Shiva_Temple_Madhya_Pradesh_004.jpg",
    description: "An ancient circular temple perched on a 100-foot-tall hill in Mitawali, about 40 km from Gwalior. Constructed in 1055 AD, it features 64 outer chambers dedicated to the 64 Yoginis (manifestations of the mother goddess) and a central shrine dedicated to Lord Shiva.",
    highlights: [
      "Spectacular circular architecture built in a unique style",
      "64 small shrines containing Shivlingams built around the inner wall",
      "Widely believed to have inspired the architectural design of India's old Parliament House",
      "Panoramic views of the surrounding green valleys from the hilltop"
    ],
    history_long: "Built by King Devapala of the Kachchhapaghata dynasty in 1055 AD, this temple was an ancient center for astrology, mathematics, and tantric worship. The circular layout was designed to calculate solar and astronomical cycles. While many structures of this era were destroyed, its hilltop position and solid construction helped it survive the test of time.",
    tips: [
      "Since it is located 40 km outside Gwalior, hire a private taxi to combine it with the Bateshwar Temples nearby.",
      "Wear a hat and sunscreen; there is no shade in the open circular courtyard.",
      "Climb the steps slowly as they are relatively steep.",
      "Hire a local guide at the site to learn about the astronomical functions of the pillars."
    ],
    trivia: "While there is no written government record, the striking circular structure, columns, and central hall design of the Mitawali temple are so identical to the old Indian Parliament House (Sansad Bhavan) built by Edwin Lutyens that it is widely accepted as its inspiration."
  },
  {
    id: 14,
    name: "Bateshwar Group of Temples",
    category: "temples",
    built: "8th - 10th Century AD",
    rating: 4.8,
    coords: [26.4250, 78.2325],
    timings: "08:00 AM - 05:00 PM",
    fee: "Free Entry",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Bateshwar_Temples_%2815695822503%29.jpg",
    description: "A breathtaking cluster of nearly 200 ancient sandstone mini-temples built in a valley in Morena, near Gwalior. Dedicated to Shiva and Vishnu, they were constructed during the Gurjara-Pratihara dynasty and have been meticulously restored from rubble.",
    highlights: [
      "A vast, fairytale-like forest of nearly 200 ancient stone temples",
      "Meticulous restoration work showing detailed carvings of deities and guardians",
      "Quiet, mystical atmosphere with birds chirping and historical ruins",
      "Surrounding ruins of the ancient Padavali fortress temple"
    ],
    history_long: "Built between the 8th and 10th centuries AD, the Bateshwar temples were destroyed during Islamic invasions and earthquakes. For centuries, the ruins lay buried in a dense forest, which became a hideout for local dacoits (bandits). In 2005, the Archaeological Survey of India (ASI), led by archaeologist K.K. Muhammed, successfully negotiated with the dacoits to allow the restoration of the temples. Over several years, they reassembled the giant jigsaw puzzle of stone blocks to recreate this historic site.",
    tips: [
      "Combine this excursion with Mitawali circular temple as they are only 10 minutes apart.",
      "Hire a guide to show you the remarkable detail carvings on the door frames.",
      "Carry food and water; there are no shops or restaurants in the immediate vicinity of this remote heritage site.",
      "Be respectful of the restoration work and avoid climbing on the fragile structures."
    ],
    trivia: "The dacoit leader Nirbhay Singh Gujjar protected the site from looters for years. He agreed to surrender and allow restoration only after being convinced by the ASI team that the temples belonged to their Gurjara-Pratihara ancestors."
  },
  {
    id: 15,
    name: "Patankar Bazar",
    category: "cultural",
    built: "19th Century",
    rating: 4.4,
    coords: [26.2072, 78.1585],
    timings: "11:00 AM - 09:30 PM (Closed Sundays)",
    fee: "Free Entry",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/19/Shelves_from_a_Saree_shop_%286543977625%29.jpg",
    description: "One of the oldest and most vibrant marketplaces in Gwalior. Stretching near the Maharaj Bada square, Patankar Bazar is famous for traditional handlooms, especially authentic Chanderi and Maheshwari silk sarees, and Gwalior's famous leather items.",
    highlights: [
      "Vibrant market streets lined with traditional fabric shops",
      "Famous for handloom Chanderi sarees, known for their lightweight and gold borders",
      "Shops selling traditional leather shoes, bags, and local metal crafts",
      "Lively local culture, street vendors, and traditional shopping experience"
    ],
    history_long: "Patankar Bazar grew during the late Scindia era as the primary trading market for textile weavers and local leather craftsmen. Gwalior became famous as a commercial hub for Chanderi silks, which were historically commissioned by the queens and princesses of the Scindia court. Today, it remains the primary shopping destination for visitors looking for authentic local textiles.",
    tips: [
      "Bargaining is common among small street vendors, but government emporiums have fixed prices.",
      "Look for the 'Handloom Mark' tag when buying Chanderi sarees to ensure they are authentic hand-woven silks.",
      "Visit in the late afternoon to combine shopping with an evening food walk around Maharaj Bada.",
      "Most shops are closed on Sundays, so plan your shopping days accordingly."
    ],
    trivia: "Chanderi silk is a centuries-old weave that mixes silk thread with cotton, creating a fabric so light and transparent that it was historically called 'woven air' in royal courts."
  },
  {
    id: 16,
    name: "Bahadoora Ke Laddoo",
    category: "cultural",
    built: "1950 AD",
    rating: 4.7,
    coords: [26.2052, 78.1548],
    timings: "08:00 AM - 08:30 PM",
    fee: "Laddoo starting from ₹30 per piece",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/06/Boondi_laddoo.JPG",
    description: "A legendary sweet shop located in Gwalior's Naya Bazar area, famous all over India for its mouthwatering Boondi Laddoos. Prepared in pure Desi Ghee (clarified butter), these laddoos are prepared fresh daily using traditional wood-fire stoves.",
    highlights: [
      "The most famous Boondi Laddoos in Madhya Pradesh, made in pure Desi Ghee",
      "Traditional open kitchen style where visitors can see the fresh laddoos being prepared",
      "Authentic Gwalior heritage sweet shop that has maintained its taste for decades",
      "Also famous for other traditional sweets like Gulab Jamun and Kaju Katli"
    ],
    history_long: "Founded in 1950 by late Shri Bahadur Singh, this small sweet shop started as a humble local vendor. Through a dedication to quality and using only pure ingredients, his boondi laddoos became a sensation. Today, it is run by the third generation of his family and has become a landmark culinary attraction in Gwalior, frequented by politicians, celebrities, and thousands of daily food lovers.",
    tips: [
      "Ask for hot, freshly made laddoos directly from the preparation counter.",
      "The shop gets extremely crowded in the evening; visit during the afternoon to avoid long queues.",
      "They pack the laddoos in sturdy boxes, making it easy to carry them home as souvenirs for friends.",
      "Try their hot samosas and gulab jamun alongside the laddoos."
    ],
    trivia: "Despite opening multiple branches and modernizing, the family still uses traditional charcoal and wood-fire stoves in their main kitchen, believing the smoke gives the laddoos a distinct traditional aroma."
  },
  {
    id: 17,
    name: "Pagara Dam (Morena)",
    category: "cultural",
    built: "1927 AD",
    rating: 4.5,
    coords: [26.2952, 77.6749],
    timings: "06:00 AM - 06:00 PM",
    fee: "Free Entry",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
    description: "Located 65 km from Gwalior in Morena district, Pagara Dam is a massive masonry structure built across the Asan River. Famous for its sprawling grasslands, peaceful campsites, and boating, it is a highly popular day-trip and cycling destination.",
    highlights: [
      "Massive water reservoir with scenic rocky hills around",
      "Sprawling green fields near the water ideal for camping",
      "Popular destination for motorcycle road-trips and bicycle clubs",
      "Boating facilities operated by local tourism operators"
    ],
    history_long: "Pagara Dam was constructed in 1927 under the late Scindia administration to act as a major irrigation reservoir for the arid lands of Morena. Over the years, the dam has gathered rich silt, forming fertile grasslands that emerge when water levels drop. It has become a highly favored offbeat ecotourism site in the Gwalior region.",
    tips: [
      "It is a remote location; ensure your vehicle has enough fuel and carry your own tools/spare tires.",
      "Pack a complete picnic basket and outdoor chairs as there are no shops or restaurants near the dam.",
      "Avoid swimming in the reservoir as the depth increases suddenly and underwater silt can be dangerous.",
      "Visit in the early morning to catch spectacular mist rising over the water."
    ],
    trivia: "During the winter, the dry areas of the dam's reservoir turn into massive green pastures where thousands of local cattle graze, creating a scenery that resembles the rolling steppes of Central Asia."
  },
  {
    id: 18,
    name: "Bhadawana Waterfall & Shiva Shrine",
    category: "cultural",
    built: "Natural (Ancient shrine)",
    rating: 4.4,
    coords: [26.1250, 78.1120],
    timings: "08:00 AM - 05:30 PM",
    fee: "Free Entry",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/be/Small_rocky_stream_of_water_1.jpg",
    description: "A popular monsoon waterfall and picnic spot located 25 km from Gwalior. The seasonal waterfall cascades down rocky steps into a pool, next to a small, peaceful temple dedicated to Lord Shiva.",
    highlights: [
      "Water cascading down sandstone steps during monsoon",
      "Ancient Shiva temple built in a rocky cave setting",
      "Popular local picnic spot surrounded by green trees",
      "Lush trekking paths around the rocky gorges"
    ],
    history_long: "Bhadawana is a natural waterfall formed by seasonal streams cutting through the Gwalior sandstone hills. The cave shrine dedicated to Lord Shiva has been a place of pilgrimage for local villagers for centuries. During the holy month of Sawan (monsoon), thousands of Gwalior residents hike to the temple to offer water to the deity and enjoy the flowing falls.",
    tips: [
      "The waterfall goes completely dry in the hot summer months; visit from July to October for the best experience.",
      "The steps leading down to the falls can be slippery, so wear shoes with good grip.",
      "Keep an eye on children near the water pools as the depth can vary.",
      "Watch out for monkeys; keep food bags closed and out of sight."
    ],
    trivia: "According to local folklore, the natural cave temple was once a retreat for sages who meditated behind the screen of the cascading waterfall to achieve spiritual peace."
  },
  {
    id: 19,
    name: "Sultangarh Waterfall (Shivpuri)",
    category: "cultural",
    built: "Natural Attraction",
    rating: 4.6,
    coords: [25.9653, 77.9254],
    timings: "08:00 AM - 05:00 PM",
    fee: "Free Entry",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
    description: "A spectacular natural waterfall located 60 km from Gwalior on the Shivpuri road. The Parvati River cascades over massive rocky sandstone cliffs, forming a deep swimming pool at the bottom surrounded by a dense forest.",
    highlights: [
      "Dramatic natural waterfall on the Parvati River",
      "Massive sandstone boulders perfect for sitting and relaxing",
      "Deep natural rock pool popular for swimming and diving",
      "Surrounded by a dense, peaceful forest sanctuary"
    ],
    history_long: "Sultangarh Waterfall is a natural geological formation where the Parvati River cuts through the hard rock layers of the Vindhyan range. It is celebrated in regional tourism as one of the most scenic and wild waterfalls near Gwalior. In recent years, safety railings and viewing platforms have been added to let visitors enjoy the waterfall safely.",
    tips: [
      "The water current can become extremely strong and dangerous during heavy rains; strictly avoid swimming during peak monsoon.",
      "Carry a change of clothes if you plan on swimming in the natural pool.",
      "There are small local stalls selling hot tea and instant noodles, but carry your own heavy meals.",
      "The road from Gwalior is a pleasant drive; start early in the morning to make it a full day trip."
    ],
    trivia: "The name 'Sultangarh' comes from an ancient ruined fort located in the nearby forests, which was used as a hunting lodge by local rulers centuries ago."
  },
  {
    id: 20,
    name: "Nalkeshwar Temple & Cave Falls",
    category: "temples",
    built: "Natural (Ancient Temple)",
    rating: 4.5,
    coords: [26.1154, 78.0754],
    timings: "06:00 AM - 06:00 PM",
    fee: "Free Entry",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/74/009242022_Kaviyur_Rock_Cut_Temple_near_Thiruvalla_Kerala_026.jpg",
    description: "Hidden in a rocky valley 22 km from Gwalior, Nalkeshwar is a peaceful cave temple and seasonal waterfall. It is famous for a natural spring that continuously drips water onto a Shiva Lingam inside a rock cave.",
    highlights: [
      "Natural spring dripping water directly onto the Shiva Lingam",
      "Quiet rock cave setting inside a secluded valley",
      "Seasonal waterfall that flows down the cliffs during rains",
      "Very peaceful, spiritual atmosphere far from city noise"
    ],
    history_long: "Nalkeshwar is named after the ancient Sage Garga who is said to have meditated in these caves. The temple is built around a perennial natural spring that flows from the sandstone layers of the hill. It has been a sacred site for meditation and worship for centuries, offering a perfect blend of natural beauty and spiritual quietness.",
    tips: [
      "The approach path involves a small walk on rocky ground, so wear comfortable sports shoes.",
      "Visit during the morning hours when the valley is filled with birdsong and pleasant air.",
      "Respect the sanctity of the temple; speak softly and avoid littering.",
      "Combine this with a trip to the nearby Bhadawana waterfall for a complete day out."
    ],
    trivia: "The water dripping onto the Shiva Lingam in the cave flows continuously throughout the year, even during the peak dry summers when the main waterfall outside has dried up."
  }
];

// Map Global Variables
let map;
let markers = [];
let activeLandmarkId = 0;

// Initialize Webpage Controls
document.addEventListener("DOMContentLoaded", () => {
  initNavbarScroll();
  renderSidebarCards(landmarks);
  initMap();
  setActiveLandmark(0);
  
  // Set up event listeners for filters
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      // Toggle active class on buttons
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      // Filter list
      const category = btn.getAttribute("data-category");
      const filteredLandmarks = category === "all" 
        ? landmarks 
        : landmarks.filter(l => l.category === category);
      
      renderSidebarCards(filteredLandmarks);
      
      // If active landmark is not in filtered list, set the first filtered item as active
      if (filteredLandmarks.length > 0) {
        const found = filteredLandmarks.find(l => l.id === activeLandmarkId);
        if (!found) {
          setActiveLandmark(filteredLandmarks[0].id);
        }
      }
    });
  });

  // Modal event listeners
  const openModalBtn = document.getElementById("open-modal-btn");
  const modal = document.getElementById("detail-modal");
  const closeModalBtns = [
    document.getElementById("close-modal-btn-top"),
    document.getElementById("modal-close-action-btn")
  ];

  openModalBtn.addEventListener("click", openDetailModal);
  closeModalBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      modal.classList.remove("active");
    });
  });

  // Modal outside click to close
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });

  // Modal Tabs event listeners
  const tabBtns = document.querySelectorAll(".tab-btn");
  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      tabBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      const tabId = btn.getAttribute("data-tab");
      document.querySelectorAll(".tab-content").forEach(tc => tc.classList.remove("active"));
      document.getElementById(`tab-${tabId}`).classList.add("active");
    });
  });

  // Pan Map Button
  document.getElementById("pan-map-btn").addEventListener("click", () => {
    const landmark = landmarks.find(l => l.id === activeLandmarkId);
    if (landmark) {
      map.flyTo(landmark.coords, 15, {
        duration: 1.5,
        easeLinearity: 0.25
      });
      // Scroll map into view on mobile
      document.getElementById("gwalior-map").scrollIntoView({ behavior: 'smooth' });
    }
  });

  // Itinerary Planner Event Listener
  document.getElementById("generate-itinerary-btn").addEventListener("click", generateTimelineItinerary);
  // Run initial itinerary generation on load
  generateTimelineItinerary();
});

// Navbar Scroll Effect
function initNavbarScroll() {
  const navbar = document.getElementById("main-nav");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
}

// Render place cards into the sidebar
function renderSidebarCards(items) {
  const container = document.getElementById("places-list");
  container.innerHTML = "";
  
  if (items.length === 0) {
    container.innerHTML = `<div class="card" style="padding: 2rem; text-align: center; color: var(--text-muted);">No locations found matching this category.</div>`;
    return;
  }

  items.forEach(place => {
    const card = document.createElement("div");
    card.className = `place-card card ${place.id === activeLandmarkId ? "active" : ""}`;
    card.setAttribute("id", `place-card-${place.id}`);
    card.innerHTML = `
      <img src="${place.image}" alt="${place.name}" class="place-card-img">
      <div class="place-card-content">
        <span class="place-card-tag">${place.category}</span>
        <h3>${place.name}</h3>
        <p class="place-card-desc">${place.description}</p>
      </div>
    `;
    
    card.addEventListener("click", () => {
      setActiveLandmark(place.id);
    });
    
    container.appendChild(card);
  });
}

// Map Initialization
function initMap() {
  // Center map between fort and city landmarks
  map = L.map('gwalior-map', {
    zoomControl: true,
    scrollWheelZoom: false
  }).setView([26.220, 78.180], 13);

  // CartoDB Dark Matter tile layer
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 20
  }).addTo(map);

  // Enable scroll zoom on map click
  map.on('click', () => { map.scrollWheelZoom.enable(); });
  map.on('mouseout', () => { map.scrollWheelZoom.disable(); });

  // Render Custom Markers
  landmarks.forEach(place => {
    const customIcon = L.divIcon({
      className: `custom-map-marker marker-id-${place.id}`,
      html: `<div class="marker-pin"></div>`,
      iconSize: [30, 30],
      iconAnchor: [15, 30]
    });

    const marker = L.marker(place.coords, { icon: customIcon }).addTo(map);
    
    // Custom popup
    marker.bindPopup(`
      <div>
        <h5>${place.name}</h5>
        <p>${place.built} • ${place.category.toUpperCase()}</p>
      </div>
    `, {
      closeButton: false,
      offset: L.point(0, -20)
    });

    // Hover tooltip/popup behavior
    marker.on('mouseover', function (e) {
      this.openPopup();
    });
    marker.on('mouseout', function (e) {
      if (place.id !== activeLandmarkId) {
        this.closePopup();
      }
    });

    // Marker click
    marker.on('click', () => {
      setActiveLandmark(place.id);
      map.setView(place.coords, 14);
    });

    markers.push({ id: place.id, markerInstance: marker });
  });
}

// Sync active state UI
function setActiveLandmark(id) {
  activeLandmarkId = id;
  const place = landmarks.find(l => l.id === id);
  if (!place) return;

  // 1. Sidebar Cards Active State Update
  document.querySelectorAll(".place-card").forEach(card => card.classList.remove("active"));
  const activeCard = document.getElementById(`place-card-${id}`);
  if (activeCard) {
    activeCard.classList.add("active");
  }

  // 2. Active Details Panel Text & Media updates
  document.getElementById("active-image").src = place.image;
  document.getElementById("active-tag").innerText = place.category;
  document.getElementById("active-title").innerText = place.name;
  document.getElementById("active-built").innerText = place.built;
  document.getElementById("active-rating-score").innerText = place.rating.toFixed(1);
  document.getElementById("active-desc").innerText = place.description;
  document.getElementById("active-timings").innerText = place.timings;
  document.getElementById("active-fee").innerText = place.fee;
  document.getElementById("active-coords").innerText = `GPS: ${place.coords[0]}° N, ${place.coords[1]}° E`;

  // Dynamic list injection for highlights
  const highlightsContainer = document.getElementById("active-highlights");
  highlightsContainer.innerHTML = "";
  place.highlights.forEach(hl => {
    const li = document.createElement("li");
    li.innerText = hl;
    highlightsContainer.appendChild(li);
  });

  // 3. Map Syncing
  markers.forEach(item => {
    const el = document.querySelector(`.marker-id-${item.id}`);
    if (el) {
      if (item.id === id) {
        el.classList.add("active");
        item.markerInstance.openPopup();
      } else {
        el.classList.remove("active");
        item.markerInstance.closePopup();
      }
    }
  });

  // Soft flyTo center map
  if (map) {
    map.flyTo(place.coords, 14, {
      duration: 1.2,
      easeLinearity: 0.25
    });
  }
}

// Function to select card and scroll to explorer section from footer
window.selectAndScroll = function(id) {
  setActiveLandmark(id);
  document.getElementById('explorer').scrollIntoView({ behavior: 'smooth' });
};

// Open Modal Drawer
function openDetailModal() {
  const place = landmarks.find(l => l.id === activeLandmarkId);
  if (!place) return;

  const modal = document.getElementById("detail-modal");
  
  // Set content
  document.getElementById("modal-image").src = place.image;
  document.getElementById("modal-tag").innerText = place.category;
  document.getElementById("modal-title").innerText = place.name;
  document.getElementById("modal-built").innerText = place.built;
  document.getElementById("modal-coordinates").innerText = `${place.coords[0]}, ${place.coords[1]}`;
  
  // Populate tab contents
  document.getElementById("modal-history-content").innerText = place.history_long;
  document.getElementById("modal-trivia-content").innerText = place.trivia;
  
  const tipsUl = document.getElementById("modal-tips-content");
  tipsUl.innerHTML = "";
  place.tips.forEach(tip => {
    const li = document.createElement("li");
    li.innerText = tip;
    tipsUl.appendChild(li);
  });

  // Reset active tab to first tab
  document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
  document.querySelector('.tab-btn[data-tab="history"]').classList.add("active");
  document.querySelectorAll(".tab-content").forEach(tc => tc.classList.remove("active"));
  document.getElementById("tab-history").classList.add("active");

  // Show Modal
  modal.classList.add("active");
}

// Timeline Itinerary Generator logic
function generateTimelineItinerary() {
  const duration = parseInt(document.getElementById("trip-duration").value);
  const style = document.getElementById("travel-style").value;
  const timelineOutput = document.getElementById("timeline-output");
  
  timelineOutput.innerHTML = "";
  
  const itineraryData = {
    heritage: {
      1: [
        {
          day: 1,
          schedule: [
            { time: "08:30 AM", title: "Sunrise at Gopachal Parvat", desc: "Start your day with gorgeous morning rays shining on the colossal rock-cut Tirthankara monuments carved in the fort hill." },
            { time: "10:00 AM", title: "Scale the Gwalior Fort & Man Mandir Palace", desc: "Climb through the gates. Hire a guide to explore the underground vaults, historical prison cells, and admire the beautiful blue-tiled exterior walls." },
            { time: "01:30 PM", title: "Lunch at Bahadura Sweets", desc: "Indulge in authentic local Gwalior cuisine and taste Gwalior's famous Bedai and sweet Rabdi Jalebi." },
            { time: "03:00 PM", title: "Jai Vilas Palace Tour", desc: "Explore the Scindia royal heritage, the Italianate architecture, the massive 3.5-ton chandeliers in Durbar Hall, and the silver table train." },
            { time: "07:30 PM", title: "Fort Sound & Light Show", desc: "Head back to the Gwalior Fort amphitheater for the historical narration narrated by Amitabh Bachchan's signature voice baritone." }
          ]
        }
      ],
      2: [
        {
          day: 1,
          schedule: [
            { time: "09:00 AM", title: "Gopachal Jain Caves", desc: "Explore the steep rock-cut caves carved into the sandstone hill face." },
            { time: "11:00 AM", title: "Explore Saas Bahu Temples & Teli Ka Mandir", desc: "Visit the architectural gems inside the fort. Saas Bahu temples display exquisite pillar work, while Teli Ka Mandir shows Dravidian-Mughal mixed styles." },
            { time: "03:00 PM", title: "Archaeological Museum Gwalior", desc: "Check out the Gujari Mahal Museum, housing rare sculptures, stone coins, and the famous 'Shalabhanjika' sandstone carving." },
            { time: "06:30 PM", title: "Evening Walk at Phool Bagh", desc: "Relax in the manicured gardens and view the Italian-style water pavilions." }
          ]
        },
        {
          day: 2,
          schedule: [
            { time: "10:00 AM", title: "Royal Tour of Jai Vilas Palace", desc: "A comprehensive walk through the Scindia Dynasty's residential palaces and Durbar chambers." },
            { time: "02:00 PM", title: "Mausoleums of Tansen & Mohammad Ghaus", desc: "Walk through the serene Mughal-style gardens, view the massive Ghaus stone tomb, and chew the leaves of Tansen's legendary sweet-throat tamarind tree." },
            { time: "04:30 PM", title: "Heritage Bazar Shopping", desc: "Explore Maharaj Bada market squares. Search for authentic handloom Chanderi and Maheshwari sarees." }
          ]
        }
      ],
      3: [
        {
          day: 1,
          schedule: [
            { time: "09:00 AM", title: "Gopachal Parvat Caves", desc: "Admire the giant rock sculptures in quiet morning light." },
            { time: "10:30 AM", title: "Deep Dive: Gwalior Fort Complex", desc: "Visit the Gurudwara Data Bandi Chhor, Teli Ka Mandir, Suraj Kund, and the palace vaults." },
            { time: "06:00 PM", title: "Sunset at Fort Ramparts", desc: "Capture photographs of the sunset across Gwalior city from the fort walls." }
          ]
        },
        {
          day: 2,
          schedule: [
            { time: "10:00 AM", title: "Jai Vilas Palace & Museum", desc: "Detailed inspection of the royal family collections and Durbar Hall." },
            { time: "02:00 PM", title: "Tomb of Tansen and Hazrat Mohammad Ghaus", desc: "Observe the blend of Mughal and Hindu architectural designs on the stone screens." },
            { time: "04:30 PM", title: "Chatris of Scindia Dynasty", desc: "Visit Chhatri (cenotaphs) of the Scindia rulers, featuring rich marble inlay carvings and beautiful gardens." }
          ]
        },
        {
          day: 3,
          schedule: [
            { time: "08:00 AM", title: "Day Excursion: Bateshwar Temples & Mitawali", desc: "Take a day taxi trip (40 km out) to Bateshwar group of 200 ancient mini-temples and the circular Mitawali temple, which inspired India's Parliament House design." },
            { time: "05:00 PM", title: "Local Sweets & Shopping Tour", desc: "Return to Gwalior to eat Petha, Gajak (sweet winter sesame snack), and buy local handicrafts." }
          ]
        }
      ]
    },
    spiritual: {
      1: [
        {
          day: 1,
          schedule: [
            { time: "07:00 AM", title: "Aarti at Sun Temple (Surya Mandir)", desc: "Start with peace in the Birla Sun Temple, looking at the sun's rays reflecting on the red sandstone carvings." },
            { time: "09:30 AM", title: "Gopachal Parvat Jain Monoliths", desc: "Walk along the meditative cliffs of the Tirthankara figures." },
            { time: "12:00 PM", title: "Gurudwara Data Bandi Chhor", desc: "Visit the sacred Sikh Gurudwara situated on the fort hill. Take part in the Langar (community kitchen) and read about Guru Hargobind Ji freeing 52 kings." },
            { time: "04:00 PM", title: "Teli Ka Mandir & Saas Bahu Temple", desc: "Stand in awe of the spiritual energy of these ancient 9th-century active temple structures." }
          ]
        }
      ],
      2: [
        {
          day: 1,
          schedule: [
            { time: "07:00 AM", title: "Birla Sun Temple", desc: "Quiet meditation inside the marble inner sanctum." },
            { time: "10:00 AM", title: "Gurudwara Data Bandi Chhor", desc: "Experience the calming spiritual atmosphere on top of the fort hill." },
            { time: "03:00 PM", title: "Tomb of Sufi Saint Mohammad Ghaus", desc: "Pray in the calm Mughal garden compound, known for its spiritual Sufi stone screening architecture." }
          ]
        },
        {
          day: 2,
          schedule: [
            { time: "08:00 AM", title: "Saas Bahu Temple & Teli Ka Mandir", desc: "Inspect the delicate stone carvings and icons of Lord Vishnu." },
            { time: "11:00 AM", title: "Gopachal Parvat Path", desc: "Walk up the peaceful cliffs for meditation." },
            { time: "04:00 PM", title: "Koteshwar Temple", desc: "Visit this ancient Shiva temple, famous for a large Shiva Lingam and popular local evening prayers." }
          ]
        }
      ],
      3: [
        {
          day: 1,
          schedule: [
            { time: "07:00 AM", title: "Sun Temple Sunrise", desc: "Spiritual morning prayers amidst the beautiful garden complex." },
            { time: "10:00 AM", title: "Gurudwara Data Bandi Chhor", desc: "Observe community service and participate in prayer chants." },
            { time: "04:00 PM", title: "Saas Bahu Temple Complex", desc: "Examine the historic temple layouts." }
          ]
        },
        {
          day: 2,
          schedule: [
            { time: "09:00 AM", title: "Gopachal Rock Shrines", desc: "Morning climb to the Jain rock caves." },
            { time: "02:00 PM", title: "Mausoleums of Ghaus & Tansen", desc: "Discover the syncretic Hindu-Sufi musical heritage of Gwalior." },
            { time: "05:00 PM", title: "Siddhanchal Caves", desc: "Explore the second set of rock-cut Jain carvings on the opposite side of the Gwalior Fort road." }
          ]
        },
        {
          day: 3,
          schedule: [
            { time: "08:00 AM", title: "Day Excursion: Bateshwar & Mitawali Temples", desc: "Explore the clusters of thousands of years old Shiva temples located in padavali forests." },
            { time: "06:00 PM", title: "Evening Satsang / Bhajans", desc: "Conclude your spiritual tour in Gwalior at a local temple." }
          ]
        }
      ]
    },
    family: {
      1: [
        {
          day: 1,
          schedule: [
            { time: "09:00 AM", title: "Gwalior Fort & Man Mandir Palace", desc: "Walk through the elephant gate. The kids will love the underground chambers and stories of the kings." },
            { time: "01:00 PM", title: "Lunch and Sweets at Maharaj Bada", desc: "Enjoy famous Gwalior street foods, samosas, and kachoris." },
            { time: "02:30 PM", title: "Jai Vilas Palace", desc: "Observe the royal silver dining train, royal weapon shields, and enormous crystal chandeliers." },
            { time: "06:00 PM", title: "Phool Bagh Gardens & Zoo", desc: "Stroll around the gardens and view local animals at the mini-zoo park." }
          ]
        }
      ],
      2: [
        {
          day: 1,
          schedule: [
            { time: "09:30 AM", title: "Gwalior Fort Sightseeing", desc: "Explore the fort gates, palaces, and ancient temple designs." },
            { time: "02:00 PM", title: "Jai Vilas Palace Tour", desc: "Admire the Scindia royal history and grand Italian decor." },
            { time: "07:30 PM", title: "Sound & Light Show", desc: "Watch the history of Gwalior come alive in colored lights on the fort walls." }
          ]
        },
        {
          day: 2,
          schedule: [
            { time: "09:00 AM", title: "Boating & Picnic at Tigra Dam", desc: "Drive 23 km west to Tigra Dam. Enjoy boating, speed boats, and a relaxing family picnic near the water reservoir." },
            { time: "04:30 PM", title: "Visit Sun Temple", desc: "Let children run around the spacious gardens while enjoying sunset views." },
            { time: "07:00 PM", title: "Taste Gwalior's famous Gajak", desc: "Shop for sweets at Morena Gajak Bhandar near the station." }
          ]
        }
      ],
      3: [
        {
          day: 1,
          schedule: [
            { time: "09:30 AM", title: "Gwalior Fort Walkthrough", desc: "A comprehensive, guide-assisted tour of the palaces." },
            { time: "03:00 PM", title: "Scindia Museum Tour", desc: "Detailed walkthrough of the palace arms, gallery, and carriage museum." }
          ]
        },
        {
          day: 2,
          schedule: [
            { time: "08:30 AM", title: "Day trip to Tigra Dam", desc: "Experience freshwater boating and panoramic views." },
            { time: "03:30 PM", title: "Tansen & Mohammad Ghaus Tomb", desc: "Learn about Gwalior's musical legends and view the tombs." },
            { time: "06:30 PM", title: "Phool Bagh Walk", desc: "Enjoy snacks and park recreation." }
          ]
        },
        {
          day: 3,
          schedule: [
            { time: "10:00 AM", title: "Gwalior Zoo (Gandhi Zoo)", desc: "Spend the morning looking at white tigers, birds, and animals in a heritage park setting." },
            { time: "02:00 PM", title: "Handloom Emporium Shopping", desc: "Visit state-run handloom shops for authentic Chanderi sarees." },
            { time: "06:00 PM", title: "Family dinner: Gwalior Heritage hotel", desc: "Enjoy a traditional royal Thali at a converted heritage property." }
          ]
        }
      ]
    }
  };

  // Find correct itinerary list
  const styleItinerary = itineraryData[style] || itineraryData.heritage;
  const planDays = styleItinerary[duration] || styleItinerary[1];

  planDays.forEach(dayBlock => {
    const dayElement = document.createElement("div");
    dayElement.className = "itinerary-day-block";
    dayElement.innerHTML = `
      <h3>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
        Day ${dayBlock.day} Itinerary
      </h3>
      <div class="timeline-items">
        ${dayBlock.schedule.map(item => `
          <div class="timeline-item">
            <span class="timeline-time">${item.time}</span>
            <div class="timeline-title">${item.title}</div>
            <p class="timeline-desc">${item.desc}</p>
          </div>
        `).join("")}
      </div>
    `;
    timelineOutput.appendChild(dayElement);
  });
}
