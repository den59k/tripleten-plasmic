import React from 'react';
import './AppFooter.sass'

const AppFooter = () => {
    
  const links = [
    [
      { title: "Part-time Data Science bootcamp", href: "https://tripleten.com/data-science/" },
      { title: "Part-time Software Engineering bootcamp", href: "https://tripleten.com/software-engineer/" },
      { title: "Part-time Quality Assurance bootcamp", href: "https://tripleten.com/qa-engineer/" },
      { title: "Part-time BI Analytics bootcamp", href: "https://tripleten.com/bi/" },
      { title: "Free Intro to SQL", href: "https://tripleten.com/sql/" },
      { title: "Can’t decide? Take a career quiz!", href: "https://y-data.typeform.com/to/U4W5pFEE" }
    ],
    [
      { title: "Real industry experts", href: "https://tripleten.com/externships/" },
      { title: "One-on-one support", href: "https://tripleten.com/team/" },
      { title: "Flexible payment options", href: "https://tripleten.com/about/payment-options/" },
      { title: "1000+ successful graduates", href: "https://tripleten.com/about/student-success/" },
      { title: "2024 Outcomes report", href: "https://tripleten.com/outcomes/" },
      { title: "Comparison", href: "https://tripleten.com/programs/best-coding-bootcamps/" },
    ],
    [
      { title: "About", href: "https://tripleten.com/about/" },
      { title: "FAQ", href: "https://tripleten.com/faq/" },
      { title: "Support", href: "https://docs.tripleten.com/support/feedback.html" },
      { title: "Carrers", href: "https://www.comeet.com/jobs/tripleten/98.008" },
      { title: "Podcast", href: "https://tripleten.com/special/podcast/" },
      { title: "Site map", href: "https://tripleten.com/about/site-map/" },
    ],
    [
      { title: "Terms of use", href: "https://docs.tripleten.com/legal/terms_of_use.html" },
      { title: "Regulatory Information", href: "https://tripleten.com/about/regulatory-policies/" },
      { title: "Referral program", href: "https://docs.tripleten.com/legal/referral.html" },
      { title: "Privacy policy", href: "https://docs.tripleten.com/legal/confidential.html" },
    ]
  ]


  return (
    <footer className="app-footer">
      <div className="app-footer__row">
        <div>
          <div className="title">Beginner-friendly tech bootcamps</div>
          {links[0].map((item) => (
            <a key={item.href} href={item.href}>
              {item.title}
            </a>
          ))}
        </div>
        <div>
          <div className="title">Get our free mobile app!</div>
        </div>
      </div>
      <div className="app-footer__row">
        <div>
          <div className="title">Why TripleTen</div>
          {links[1].map((item) => (
            <a key={item.href} href={item.href}>
              {item.title}
            </a>
          ))}
        </div>
        <div>
          <div className="title">About TripleTen</div>
          {links[2].map((item) => (
            <a key={item.href} href={item.href}>
              {item.title}
            </a>
          ))}
        </div>
        <div></div>
        <div></div>
      </div>
      <div className="app-footer__bottom-label">
        &copy; TripleTen, 2024
        {links[3].map((item) => (
          <a key={item.href} href={item.href}>
            {item.title}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default AppFooter;