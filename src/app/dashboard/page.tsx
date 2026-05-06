"use client";

import { useState } from 'react';

export default function OroTechDashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [view, setView] = useState("DASHBOARD"); 
  const [activeLesson, setActiveLesson] = useState("HTML Home");

  const megaMenuData = [
    { name: "HTML", cat: "WEB BASICS" },
    { name: "CSS", cat: "WEB BASICS" },
    { name: "RWD", cat: "WEB BASICS" },
    { name: "BOOTSTRAP", cat: "WEB BASICS" },
    { name: "W3.CSS", cat: "WEB BASICS" },
    { name: "JAVASCRIPT", cat: "FRONTEND" },
    { name: "REACT", cat: "FRONTEND" },
    { name: "JQUERY", cat: "FRONTEND" },
    { name: "VUE", cat: "FRONTEND" },
    { name: "ANGULAR", cat: "FRONTEND" },
    { name: "NODE.JS", cat: "BACKEND" },
    { name: "EXPRESS.JS", cat: "BACKEND" },
    { name: "PYTHON", cat: "BACKEND" },
    { name: "DJANGO", cat: "BACKEND" },
    { name: "PHP", cat: "BACKEND" },
    { name: "SQL", cat: "DATABASE" },
    { name: "MONGODB", cat: "DATABASE" },
    { name: "POSTGRESQL", cat: "DATABASE" },
    { name: "FIREBASE", cat: "DATABASE" },
    { name: "AWS", cat: "CLOUD" },
    { name: "DOCKER", cat: "DEVOPS" },
    { name: "GIT & GITHUB", cat: "TOOLS" },
    { name: "TYPESCRIPT", cat: "FRONTEND" },
    { name: "C++", cat: "PROGRAMMING" }
  ];

  // Kutaalee 20 kurnan (Sidebar Links)
  const htmlSidebarLinks = [
    "HTML Home", "HTML Introduction", "HTML Editors", "HTML Basic", 
    "HTML Elements", "HTML Attributes", "HTML Headings", "HTML Paragraphs",
    "HTML Styles", "HTML Formatting", "HTML Quotations", "HTML Comments",
    "HTML Colors", "HTML CSS", "HTML Links", "HTML Images",
    "HTML Tables", "HTML Lists", "HTML Blocks", "HTML Classes"
  ];

  // Qabiyyee kutaalee 20 (Theory and Code)
  const htmlContent: { [key: string]: { title: string, desc: string, code: string } } = {
   "HTML Home": {
      title: "Seensa Bu'ura HTML: Qajeelfama Bal'aa",
      desc: "HTML (HyperText Markup Language) meeshaa ijaarsaa weebsaayitii isa hangafa. Akka namni tokko manatti galuuf lafee manaa barbaadu, weebsaayitiin hundi lafee isaa HTML irraa argata. Inni qabiyyee weebsaayitiin akka itti mul'atu qofa osoo hin taane, maal akka ta'e addaan baasee beeksisa. Barumsi HTML jalqaba ijaarama weebsaayitiiti. Yoo HTML hin beekne, CSS ykn JavaScript barachuun nama rakkisa. Kanaafuu, kumni tarkaanfii kee isa jalqabaati.\n\n" +
            "Weebsaayitiin hundi seera ittiin ijaaraman qabu. HTML-n seera kanaan dursa 'tags' fayyadamee ijaarama. Tags-n mallattoo < fi > gidduu galu. Seenaa gabaabaa yeroo ilaallu, HTML bara 1991 keessa Tim Berners-Lee tiin kan uumame yoo ta'u, ergasii gara gosa adda addaatti guddachaa dhufeera. Amma kan nuti fayyadamnu HTML5 jedhama, inni kun baay'ee ammayyaa fi weebsaayitii fakkii fi viidiyoo qaban uumuuf baay'ee salphaa dha.\n\n" +
            "HTML keessatti gosa mataduree gurguddaa qabna. Matadureewwan kunneen dubbistootaaf qabiyyee weebsaayitii kee akka salphatti hubatan gargaaru. Mataduree weebsaayitiitti dabaluuf elementoota h1 hanga h6 jiran fayyadamna. H1 mataduree guddaa yoo ta'u, h6 immoo isa xinnaa dha. Seeraan fayyadamuu jechuun mataduree gurguddaaf h1 fi h2, isaan jala jiraniif immoo h3 fayyadamuu dha. Kun immoo biraawsariin akka inni mataduree ta'e akka beeku taasisa.\n\n" +
            "Barreeffama kamiyyuu uumuuf tag <p> fayyadamna. Biraawsariin kee yeroo tag kana argu, ofumaan barreeffamicha sarara haaraa irraa jalqaba. Kun dubbistootaaf barreeffamni kee akka wal-hin makne taasisa. Jecha tokko jabeessanii argisiisuuf tag strong, bifa jallataatiin argisiisuuf immoo tag em fayyadamna. Kun dubbistootaaf qabiyyee barbaachisaa ta'e addaan baasee mul'isa. Weebsaayitiin tokko geessituu malee hiika hin qabu. Tag <a> fayyadamnee namni tokko yoo cuqaasu gara fuula biraatti akka darbu goona.\n\n" +
            "Fakkii galchuun weebsaayitii kee miidhagsa. Tag <img> fayyadamna, garuu inni kun tag cufinsaa hin qabu. Fakkiiwwan odeeffannoos salphatti dabarsu. Odeeffannoo bifa tarreen dhiheessuuf ul fi ol fayyadamna. Kun barruu kee bifa seera qabuu fi qindaawaa ta'een akka mul'atu taasisa. Gabateen odeeffannoo herregaa ykn koodii bifa qindaawaan dhiheessuuf nu gargaara. HTML barachuun hojii weeb developement keessatti balbala guddaa siif banna. OroTech waliin barumsa kee har'a eegali! Tarkaanfiin kee inni har'aa gara pirograamara ta'uutti si geessa.\n\n" +
            "Dabalataan, HTML5 meeshaalee haaraa akka viidiyoo fi kaanvaasii dabalatee dhufeera. Kun weebsaayitiin keenya akka applikeeshinii ammayyaatti akka hojjetu taasisa. Namni weebsaayitii ijaaruu barbaadu hundi dursa hubannoo HTML qabaachuu qaba. Ijaarama weebsaayitii keessatti HTML akka ijaarsa manaatti, CSS akka halluutti, JavaScript immoo akka sochiitti ilaalama. Kanaafuu, bu'ura kana jabeeffachuun ogummaa kee ni ijaara. Weebsaayitiin kee bilbilaa fi kompiitara irratti akka sirriitti mul'atuuf 'Responsive design' barbaachisaa dha.\n\n" +
            "HTML Entities fayyadamuun mallattoolee addaa akka 'copyright' uumuuf nu gargaara. Semantic HTML fayyadamuun immoo Google fi Search Engines biroof weebsaayitii keenya salphatti akka beekan taasisa. Fakkeenyaaf, article ykn section fayyadamuun qabiyyee keenya bakka bakkatti qooda. Xumura irratti, barumsi kun hojii kee itti aanuuf bu'ura cimaa dha. Amma koodii kee barreessuun of shaakali!",
      code: "<!DOCTYPE html>\n" +
            "<html lang='om'>\n" +
            "<head>\n" +
            "  <meta charset='UTF-8'>\n" +
            "  <meta name='viewport' content='width=device-width, initial-scale=1.0'>\n" +
            "  <title>OroTech Hub | Barumsa HTML</title>\n" +
            "  <style>\n" +
            "    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; margin: 0; padding: 20px; background-color: #f4f4f4; }\n" +
            "    header { background: #111; color: #fff; padding: 1rem; text-align: center; border-radius: 10px; }\n" +
            "    nav { margin: 20px 0; background: #fff; padding: 10px; border-radius: 8px; text-align: center; }\n" +
            "    nav a { text-decoration: none; color: #333; margin: 0 15px; font-weight: bold; }\n" +
            "    main { background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); max-width: 800px; margin: auto; }\n" +
            "    .hero { background: #f0fdf4; border: 1px solid #bbf7d0; padding: 40px; text-align: center; border-radius: 8px; margin-bottom: 20px; }\n" +
            "    .btn { padding: 12px 24px; background: #22c55e; border: none; color: white; border-radius: 50px; cursor: pointer; font-size: 1rem; }\n" +
            "    footer { text-align: center; margin-top: 30px; font-size: 0.9rem; color: #777; }\n" +
            "  </style>\n" +
            "</head>\n" +
            "<body>\n\n" +
            "  <header>\n" +
            "    <h1>OroTech Coding Hub</h1>\n" +
            "  </header>\n\n" +
            "  <nav>\n" +
            "    <a href='#'>Home</a>\n" +
            "    <a href='#'>Tutorials</a>\n" +
            "    <a href='#'>About</a>\n" +
            "    <a href='#'>Contact</a>\n" +
            "  </nav>\n\n" +
            "  <main>\n" +
            "    <div class='hero'>\n" +
            "      <h2>Baga Gara Addunyaa Koodii Dhufte!</h2>\n" +
            "      <p>HTML-n furtuu weebsaayitiitii dha. Barnoota kee har'a eegali.</p>\n" +
            "      <button class='btn'>Shaakala Jalqabi</button>\n" +
            "    </div>\n\n" +
            "    <h3>Maaliif HTML Baranna?</h3>\n" +
            "    <p>Weebsaayitiin addunyaa kana irra jiru hundi HTML fayyadama. Inni bu'ura waan ta'eef, ogummaa koodii keetiif hundee dha.</p>\n" +
            "    <ul>\n" +
            "      <li>Ijaarsa weebsaayitiif</li>\n" +
            "      <li>Ogummaa teeknoolojii ijaaruuf</li>\n" +
            "      <li>Hojii pirograamiingii argachuuf</li>\n" +
            "    </ul>\n" +
            "  </main>\n\n" +
            "  <footer>\n" +
            "    <p>&copy; 2026 OroTech Hub. All Rights Reserved.</p>\n" +
            "  </footer>\n\n" +
            "</body>\n" +
            "</html>"
    },
    "HTML Introduction": {
      title: "Seensa HTML: Maalummaa fi Faayidaa Isaa",
      desc: "HTML jechuun 'HyperText Markup Language' jechuu dha. Inni weebsaayitiin akkamitti akka ijaaramu kan itti himnu afaan mallattoo ti. Akka lafee namaa kan weebsaayitiin irratti hirmaatu yoo ta'u, qabiyyee weebii keenyaa biraawsariin (browser) akka hubatu taasisa. Fakkeenyaaf, barreeffamni kun mataduree dha, inni kun immoo paragraafii dha jedhee addaan baasa. HTML osoo hin beekne pirograamiingii weebii irratti hirmaachuun hin danda'amu.\n\n" +
            "Seerri HTML elementoota irratti hundaa'a. Elementii jechuun wanta biraawsariin weebsaayitii kee irratti argisiisu hunda dha. Mallattoo banni (opening tag) fi mallattoo cufaan (closing tag) gidduu qabiyyee barbaachisaa ta'e galchina. Kunis ijaarsa weebsaayitii keenyaa qulqulluun akka mul'atu taasisa. Weebsaayitiin hundi ijaarsa kanaan jalqabu. Tarkaanfiin kun ijaarsa weebsaayitiif hundee waan ta'eef sirriitti hubachuun ogummaa itti aanuuf si qopheessa.\n\n" +
            "Dabalataan, HTML-n 'markup language' malee 'programming language' miti. Inni gocha raawwachuu osoo hin taane, qabiyyee weebii bifa qindaawaan dhiheessuuf tajaajila. Biraawsariin kee koodii kana dubbisee gara bifa namni argu danda'utti jijjiira. Fakkeenyaaf, tag <h1> yoo argite mataduree guddaa ta'uu isaa beekta. HTML5-n immoo ammayyummaa dabalataa kan akka viidiyoo fi fakkiiwwan ammayyaa salphatti itti galchinu nuu uumeera. OroTech waliin koodii barreessuu jalqabuun kee ogummaa ammayyaa si gonfachiisa.",
      code: "<!DOCTYPE html>\n" +
            "<html>\n" +
            "<head>\n" +
            "  <title>Maalummaa HTML</title>\n" +
            "  <style>\n" +
            "    .box { border: 2px solid #22c55e; padding: 20px; border-radius: 15px; background-color: #f0fdf4; }\n" +
            "    h1 { color: #111; }\n" +
            "    p { color: #444; font-size: 1.1rem; }\n" +
            "  </style>\n" +
            "</head>\n" +
            "<body>\n\n" +
            "  <div class='box'>\n" +
            "    <h1>HTML Maali?</h1>\n" +
            "    <p>HTML-n bu'ura weebsaayitiiti. Inni ijaarsa fuula weebii tokkoo to'ata.</p>\n" +
            "    <hr>\n" +
            "    <p><strong>Fakkeenyaaf:</strong> Tags fayyadamnee browser-f ajaja kennina.</p>\n" +
            "  </div>\n\n" +
            "</body>\n" +
            "</html>"
    },
    "HTML Editors": {
      title: "HTML Editors",
      desc: "Web pages can be created and modified by using professional HTML editors like VS Code or Sublime Text. However, for learning, a simple text editor like Notepad (PC) or TextEdit (Mac) is a good way to start.",
      code: "<!-- Practice using VS Code or even Notepad -->\n<h1>My First Page</h1>\n<p>Written in a text editor.</p>"
    },
    "HTML Basic": {
      title: "HTML Basic Examples",
      desc: "The basic structure consists of the DOCTYPE declaration, followed by the html, head, and body tags. All HTML documents must start with a document type declaration: <!DOCTYPE html>.\n+",
      
      code: "<!DOCTYPE html>\n<html>\n<body>\n  <h1>My First Heading</h1>\n  <p>My first paragraph.</p>\n</body>\n</html>"
    },
    
    "HTML Elements": {
      title: "HTML Elements",
      desc: "An HTML element is defined by a start tag, some content, and an end tag. The element is everything from the start tag to the end tag: <tagname>Content goes here...</tagname>.",
      code: "<h1>This is an element</h1>\n<p>This is another element.</p>\n<br> <!-- Empty element -->"
    },
    "HTML Attributes": {
      title: "HTML Attributes",
      desc: "All HTML elements can have attributes. Attributes provide additional information about elements. They are always specified in the start tag and usually come in name/value pairs like: name='value'.",
      code: "<a href='https://orotechhub.com'>Visit our Hub</a>\n<img src='logo.png' width='200' height='100' alt='Logo'>"
    },
    "HTML Headings": {
      title: "HTML Headings",
      desc: "HTML headings are defined with the <h1> to <h6> tags. <h1> defines the most important heading, while <h6> defines the least important heading. Search engines use headings to index your page structure.",
      code: "<h1>Heading Level 1</h1>\n<h2>Heading Level 2</h2>\n<h3>Heading Level 3</h3>"
    },
    "HTML Paragraphs": {
      title: "HTML Paragraphs",
      desc: "The HTML <p> element defines a paragraph. Browsers automatically add some white space (a margin) before and after a paragraph. You cannot be sure how HTML will be displayed if you add extra spaces.",
      code: "<p>This is a paragraph.</p>\n<p>This is another paragraph.</p>"
    },
    "HTML Styles": {
      title: "HTML Styles",
      desc: "The HTML style attribute is used to add styles to an element, such as color, font, size, and more. It follows the syntax: <tagname style='property:value;'>.",
      code: "<p style='color:red;'>I am red</p>\n<p style='font-size:30px;'>I am big</p>"
    },
    "HTML Formatting": {
      title: "HTML Formatting",
      desc: "HTML contains several elements for defining text with a special meaning. For example: <b> for bold text, <i> for italic, <strong> for important text, and <em> for emphasized text.",
      code: "<b>Bold text</b>\n<strong>Important text</strong>\n<i>Italic text</i>\n<mark>Marked text</mark>"
    },
    "HTML Quotations": {
      title: "HTML Quotations",
      desc: "The HTML <blockquote> element defines a section that is quoted from another source. Use <q> for short inline quotations and <abbr> for abbreviations.",
      code: "<blockquote cite='http://world.com'>Long quote here...</blockquote>\n<p>The <abbr title='HyperText Markup Language'>HTML</abbr> is easy.</p>"
    },
    "HTML Comments": {
      title: "HTML Comments",
      desc: "HTML comments are not displayed in the browser, but they can help document your HTML source code. You can add comments to your source by using the syntax: <!-- Write your comments here -->.",
      code: "<!-- This is a hidden comment -->\n<p>This is a visible paragraph.</p>"
    },
    "HTML Colors": {
      title: "HTML Colors",
      desc: "HTML colors are specified with predefined color names, or with RGB, HEX, HSL, RGBA, or HSLA values. You can set the background color, text color, or border color.",
      code: "<h1 style='background-color:DodgerBlue;'>Hello</h1>\n<p style='color:Tomato;'>Tomato Text</p>"
    },
    "HTML CSS": {
      title: "HTML CSS",
      desc: "CSS stands for Cascading Style Sheets. CSS saves a lot of work. It can control the layout of multiple web pages all at once. It can be added via Inline, Internal, or External methods.",
      code: "<head>\n<style>\n  body {background-color: powderblue;}\n  h1 {color: blue;}\n</style>\n</head>"
    },
    "HTML Links": {
      title: "HTML Links",
      desc: "HTML links are hyperlinks. You can click on a link and jump to another document. When you move the mouse over a link, the mouse arrow will turn into a little hand.",
      code: "<a href='https://www.google.com' target='_blank'>Search on Google</a>"
    },
    "HTML Images": {
      title: "HTML Images",
      desc: "Images can improve the design and the appearance of a web page. The <img> tag is used to embed an image. It is empty, it contains attributes only, and does not have a closing tag.",
      code: "<img src='work.jpg' alt='Girl at desk' width='500' height='600'>"
    },
    "HTML Tables": {
      title: "HTML Tables",
      desc: "An HTML table consists of table cells inside rows and columns. Use <table> to define the table, <tr> for rows, <th> for headers, and <td> for data/cells.",
      code: "<table>\n  <tr>\n    <th>Name</th>\n    <th>Age</th>\n  </tr>\n  <tr>\n    <td>John</td>\n    <td>25</td>\n  </tr>\n</table>"
    },
    "HTML Lists": {
      title: "HTML Lists",
      desc: "HTML lists allow web developers to group a set of related items in lists. You can use Unordered lists (<ul>) with bullets or Ordered lists (<ol>) with numbers.",
      code: "<ul>\n  <li>Coffee</li>\n  <li>Tea</li>\n</ul>\n<ol>\n  <li>Step 1</li>\n  <li>Step 2</li>\n</ol>"
    },
    "HTML Blocks": {
      title: "HTML Block & Inline",
      desc: "Every HTML element has a default display value, depending on what type of element it is. The two display values are block and inline. <div> is a block-level, while <span> is an inline container.",
      code: "<div style='border:1px solid black;'>I am a block</div>\n<span>I am inline</span>"
    },
    "HTML Classes": {
      title: "HTML Classes",
      desc: "The class attribute is used to specify a class for an HTML element. Multiple HTML elements can share the same class. This is used to point to a class name in a style sheet or JavaScript.",
      code: "<style>\n.city { background-color: tomato; color: white; padding: 10px; }\n</style>\n<div class='city'>London</div>\n<div class='city'>Paris</div>"
    }
    
  };

  const currentLesson = htmlContent[activeLesson] || htmlContent["HTML Home"];

  const handleNext = () => {
    const currentIndex = htmlSidebarLinks.indexOf(activeLesson);
    if (currentIndex < htmlSidebarLinks.length - 1) {
      setActiveLesson(htmlSidebarLinks[currentIndex + 1]);
    }
  };

  const handlePrev = () => {
    const currentIndex = htmlSidebarLinks.indexOf(activeLesson);
    if (currentIndex > 0) {
      setActiveLesson(htmlSidebarLinks[currentIndex - 1]);
    }
  };

  return (
    <div className={`min-h-screen font-sans selection:bg-green-500/30 transition-colors duration-500 ${view === "DASHBOARD" ? "bg-[#050505] text-white" : "bg-white text-zinc-900"}`}>
      
      {/* HEADER SECTION */}
      <header className={`h-24 flex items-center px-8 border-b sticky top-0 z-[100] transition-all ${
        view === "DASHBOARD" ? "bg-[#050505] border-zinc-900/50" : "bg-white border-zinc-200"
      }`}>
        <div className="flex items-center gap-8 w-full max-w-[1800px] mx-auto">
          
          {view === "DASHBOARD" ? (
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`group flex items-center gap-4 px-8 py-3 rounded-full font-black text-[10px] uppercase tracking-[0.2em] transition-all duration-500 border ${
                isMenuOpen 
                ? "bg-zinc-900 border-zinc-700 text-zinc-400" 
                : "bg-green-600 border-green-500 text-black shadow-[0_0_30px_rgba(34,197,94,0.2)]"
              }`}
            >
              <div className="relative w-5 h-4 flex flex-col justify-between overflow-hidden">
                <span className={`h-[2px] w-full bg-current rounded-full transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-[7px]" : ""}`}></span>
                <span className={`h-[2px] w-full bg-current rounded-full transition-all duration-300 ${isMenuOpen ? "translate-x-full opacity-0" : ""}`}></span>
                <span className={`h-[2px] w-full bg-current rounded-full transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}></span>
              </div>
              <span>{isMenuOpen ? "Close Menu" : "Browse Courses"}</span>
            </button>
          ) : (
            <button 
              onClick={() => setView("DASHBOARD")}
              className="text-zinc-500 hover:text-black font-bold text-xs uppercase tracking-widest flex items-center gap-2"
            >
              ❮ Back to Library
            </button>
          )}

          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setView("DASHBOARD")}>
            <div className="bg-green-600 text-black font-black px-2 py-0.5 rounded-sm text-[11px] italic">OH</div>
            <span className={`font-black text-2xl tracking-tighter uppercase italic ${view === "DASHBOARD" ? "text-white" : "text-zinc-900"}`}>
              OROTECH<span className="text-green-600 font-light ml-1">HUB</span>
            </span>
          </div>
        </div>
      </header>

      {/* 1. MEGA MENU */}
      {view === "DASHBOARD" && (
        <div className={`absolute top-24 left-0 w-full bg-[#050505] border-b border-zinc-800 z-[90] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] origin-top ${
          isMenuOpen ? "scale-y-100 opacity-100 translate-y-0" : "scale-y-0 opacity-0 -translate-y-10 pointer-events-none"
        }`}>
          <div className="max-w-[1800px] mx-auto p-12 lg:p-20">
            <div className="flex items-end justify-between mb-16">
              <div className="space-y-2">
                <h2 className="text-green-600 text-6xl font-black italic uppercase tracking-tighter leading-none">Learning Library</h2>
                <p className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.4em]">Explore our professional curriculum</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {megaMenuData.map((course, index) => (
                <div
                  key={index}
                  onClick={() => {
                    if (course.name === "HTML") {
                      setView("HTML_TUTORIAL");
                      setIsMenuOpen(false);
                    }
                  }}
                  className="group relative p-8 rounded-[2rem] bg-zinc-900/10 border border-zinc-900 transition-all duration-500 hover:border-green-600/50 hover:bg-zinc-900/30 cursor-pointer"
                >
                  <span className="text-zinc-600 text-[9px] font-black uppercase tracking-[0.2em] mb-3 block group-hover:text-green-600">
                    {course.cat}
                  </span>
                  
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-black uppercase tracking-tighter text-zinc-300 group-hover:text-white">
                      {course.name}
                    </h3>
                    <span className="text-green-600 text-xl opacity-0 -translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                      →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 2. MAIN CONTENT AREA */}
      <main>
        {view === "DASHBOARD" ? (
          <div className={`flex flex-col items-center justify-center h-[70vh] text-center transition-opacity duration-1000 ${isMenuOpen ? "opacity-0" : "opacity-100"}`}>
             <h1 className="text-[15vw] font-black italic opacity-[0.02] absolute select-none tracking-tighter uppercase">Library</h1>
             <div className="relative space-y-6">
                <div className="w-16 h-[2px] bg-green-600 mx-auto"></div>
                <h3 className="text-5xl md:text-7xl font-black italic tracking-tighter text-zinc-900 uppercase">Start Journey</h3>
                <p className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.5em]">Click Browse Courses to see the library</p>
             </div>
          </div>
        ) : (
          <div className="flex animate-in fade-in slide-in-from-right duration-500">
            <aside className="w-64 bg-[#E7E9EB] h-[calc(100vh-6rem)] sticky top-24 overflow-y-auto">
              <div className="py-8">
                <h2 className="px-6 mb-6 text-xl font-bold text-zinc-800 uppercase tracking-tighter border-b border-zinc-300 pb-2 mx-4">HTML Tutorial</h2>
                {htmlSidebarLinks.map((link) => (
                  <button
                    key={link}
                    onClick={() => setActiveLesson(link)}
                    className={`w-full text-left px-6 py-2 text-[14px] transition-colors ${
                      activeLesson === link ? "bg-[#04AA6D] text-white font-bold" : "text-zinc-700 hover:bg-zinc-300"
                    }`}
                  >
                    {link}
                  </button>
                ))}
              </div>
            </aside>

            <div className="flex-1 p-12 lg:p-20 bg-white">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-5xl font-normal mb-8 text-zinc-900">{currentLesson.title}</h1>
                <div className="flex justify-between mb-12">
                  <button 
                    onClick={handlePrev}
                    className={`bg-[#E7E9EB] text-zinc-900 px-6 py-2 rounded font-bold hover:bg-zinc-300 transition-all ${activeLesson === htmlSidebarLinks[0] ? "opacity-50 cursor-not-allowed" : ""}`}
                  >
                    ❮ Previous
                  </button>
                  <button 
                    onClick={handleNext}
                    className={`bg-[#04AA6D] text-white px-8 py-2 rounded font-bold hover:bg-[#059862] transition-all ${activeLesson === htmlSidebarLinks[htmlSidebarLinks.length - 1] ? "opacity-50 cursor-not-allowed" : ""}`}
                  >
                    Next ❯
                  </button>
                </div>

                <div className="bg-[#D9EEE1] p-12 rounded-xl mb-10 border-l-8 border-[#04AA6D]">
                  <p className="text-zinc-700 text-lg leading-relaxed">{currentLesson.desc}</p>
                </div>

                <div className="bg-[#E7E9EB] p-8 rounded-xl border border-zinc-300 shadow-inner">
                  <h3 className="text-2xl font-bold mb-4 text-zinc-900">Example Code:</h3>
                  <div className="bg-white p-6 border-l-4 border-[#04AA6D] font-mono text-sm leading-loose shadow-sm whitespace-pre-wrap text-zinc-800">
                    {currentLesson.code}
                  </div>
                  <button className="mt-6 bg-[#04AA6D] text-white px-6 py-2.5 rounded font-bold hover:bg-zinc-900 transition-colors">Try it Yourself »</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}