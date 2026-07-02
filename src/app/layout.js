import './globals.css';
import './tafsol-shared.css';
import './tafsol-main.css';
import Script from 'next/script';

export const metadata = {
  title: "nextgenapps — AI Automation & Software Development Solutions",
  description:
    "Leading software development company delivering AI automation services, custom software development, responsive web design, mobile app development & cloud solutions.",
  openGraph: {
    title: "nextgenapps — AI Automation & Software Development Solutions",
    description:
      "Leading software development company delivering AI automation services, custom software development, responsive web design, mobile app development & cloud solutions.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-wf-domain="tafsol.com" data-wf-page="6802c1e668f56d99304b3b8f" data-wf-site="6802c1e668f56d99304b3b20" data-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Syne:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'light' || theme === 'dark') {
                    document.documentElement.setAttribute('data-theme', theme);
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        <script type="text/javascript" dangerouslySetInnerHTML={{ __html: `!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);` }}></script>
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {children}

        <Script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6802c1e668f56d99304b3b20" strategy="beforeInteractive" />
        <Script src="https://cdn.prod.website-files.com/6802c1e668f56d99304b3b20/js/webflow.25e4ca93.223444210411fe0b.js" strategy="lazyOnload" />
        
        {/* GSAP Plugins */}
        <Script src="https://cdn.prod.website-files.com/gsap/3.15.0/gsap.min.js" strategy="lazyOnload" />
        <Script src="https://cdn.prod.website-files.com/gsap/3.15.0/Flip.min.js" strategy="lazyOnload" />
        <Script src="https://cdn.prod.website-files.com/gsap/3.15.0/ScrollTrigger.min.js" strategy="lazyOnload" />
        <Script src="https://cdn.prod.website-files.com/gsap/3.15.0/SplitText.min.js" strategy="lazyOnload" />
        <Script src="https://cdn.prod.website-files.com/gsap/3.15.0/Observer.min.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
