import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smoother;

const revealVars = {
  autoAlpha: 1,
  y: 0,
  filter: "blur(0px)",
};

const setBlurHidden = (items, y = 36, blur = 14) => {
  gsap.set(items, {
    autoAlpha: 0,
    y,
    filter: `blur(${blur}px)`,
  });
};

const setImageHidden = (figures, images, y = 56) => {
  gsap.set(figures, {
    autoAlpha: 0,
    y,
    clipPath: "inset(14% 0% 14% 0%)",
  });

  gsap.set(images, {
    scale: 1.12,
    filter: "blur(10px) saturate(0.92) contrast(1.02)",
    transformOrigin: "center center",
  });
};

const revealImages = (timeline, figures, images, position = 0.28) => {
  timeline
    .to(
      figures,
      {
        autoAlpha: 1,
        y: 0,
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.05,
        stagger: 0.12,
      },
      position,
    )
    .to(
      images,
      {
        scale: 1,
        filter: "blur(0px) saturate(0.92) contrast(1.02)",
        duration: 1.25,
        stagger: 0.12,
      },
      position,
    );
};

const initScrollSmoother = () => {
  const wrapper = document.querySelector("#smooth-wrapper");
  const content = document.querySelector("#smooth-content");

  if (!wrapper || !content) return;

  document.documentElement.style.scrollBehavior = "auto";
  document.body.style.scrollBehavior = "auto";

  smoother = ScrollSmoother.create({
    wrapper,
    content,
    smooth: 1.15,
    effects: true,
    normalizeScroll: true,
    ignoreMobileResize: true,
  });

  document.querySelectorAll("a[href^='#']").forEach((link) => {
    const targetId = link.getAttribute("href");

    if (!targetId || targetId === "#") return;

    const target = document.querySelector(targetId);

    if (!target) return;

    link.addEventListener("click", (event) => {
      event.preventDefault();
      smoother.scrollTo(target, true, "top top");
      history.replaceState(null, "", targetId);
    });
  });
};

const initHeroAnimation = () => {
  const hero = document.querySelector("#hero");
  const header = document.querySelector("header");

  if (!hero) return;

  const heroImage = hero.querySelector("img");
  const eyebrow = hero.querySelector("p:first-of-type");
  const title = hero.querySelector("h1");
  const sublabel = title?.nextElementSibling;
  const divider = hero.querySelector("span[aria-hidden='true']");
  const intro = hero.querySelector("p:nth-of-type(3)");
  const scroll = hero.querySelector("a[href='#about']");
  const scrollLine = scroll?.querySelector("span");
  const borderWrap = hero.querySelector(".absolute.inset-x-3");
  const borders = [borderWrap, borderWrap?.firstElementChild].filter(Boolean);

  gsap.set(heroImage, {
    autoAlpha: 0,
    scale: 1.16,
    transformOrigin: "center center",
  });

  gsap.set(header, { autoAlpha: 0, y: -18 });
  gsap.set(borders, { autoAlpha: 0 });
  const textItems = [eyebrow, sublabel, intro, scroll].filter(Boolean);

  gsap.set([eyebrow, title, sublabel, divider, intro, scroll], {
    autoAlpha: 0,
    y: 34,
  });
  gsap.set(textItems, {
    filter: "blur(12px)",
  });
  gsap.set(title, {
    clipPath: "inset(0 0 100% 0)",
    filter: "blur(16px)",
    y: 46,
  });
  gsap.set(divider, {
    scaleX: 0,
    transformOrigin: "center center",
  });
  gsap.set(scrollLine, {
    scaleY: 0,
    transformOrigin: "top center",
  });

  const timeline = gsap.timeline({
    defaults: {
      ease: "power3.out",
    },
  });

  timeline
    .to(heroImage, {
      autoAlpha: 1,
      scale: 1.05,
      duration: 1.7,
      ease: "power2.out",
    })
    .to(header, { autoAlpha: 1, y: 0, duration: 0.8 }, 0.22)
    .to(borders, { autoAlpha: 1, duration: 0.9, stagger: 0.08 }, 0.35)
    .to(
      eyebrow,
      { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.75 },
      0.55,
    )
    .to(
      title,
      {
        autoAlpha: 1,
        y: 0,
        clipPath: "inset(0 0 0% 0)",
        filter: "blur(0px)",
        duration: 1.05,
      },
      0.72,
    )
    .to(
      sublabel,
      { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.72 },
      0.98,
    )
    .to(
      divider,
      {
        autoAlpha: 1,
        y: 0,
        scaleX: 1,
        duration: 0.8,
      },
      1.12,
    )
    .to(
      intro,
      { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.86 },
      1.28,
    )
    .to(
      scroll,
      { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.74 },
      1.48,
    )
    .to(scrollLine, { scaleY: 1, duration: 0.8 }, 1.62);

  if (scroll) {
    gsap.to(scroll, {
      y: 8,
      duration: 1.2,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      delay: 2.1,
    });
  }
};

const initAboutAnimation = () => {
  const about = document.querySelector("#about");

  if (!about) return;

  const eyebrow = about.querySelector("p:first-of-type");
  const heading = about.querySelector("h2");
  const divider = about.querySelector("span[aria-hidden='true']");
  const figures = about.querySelectorAll("figure");
  const images = about.querySelectorAll("figure img");
  const body = about.querySelector("div.mx-auto p");
  const button = about.querySelector("a[href='#stay']");
  const textItems = [eyebrow, heading, body, button].filter(Boolean);

  gsap.set(textItems, {
    autoAlpha: 0,
    y: 36,
    filter: "blur(14px)",
  });

  gsap.set(divider, {
    autoAlpha: 0,
    scaleX: 0,
    transformOrigin: "center center",
  });

  gsap.set(figures, {
    autoAlpha: 0,
    y: 56,
    clipPath: "inset(16% 0% 16% 0%)",
  });

  gsap.set(images, {
    scale: 1.12,
    filter: "blur(10px) saturate(0.92) contrast(1.02)",
    transformOrigin: "center center",
  });

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: about,
      start: "top 68%",
      once: true,
    },
    defaults: {
      ease: "power3.out",
    },
  });

  timeline
    .to(eyebrow, {
      autoAlpha: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 0.72,
    })
    .to(
      heading,
      {
        autoAlpha: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.92,
      },
      0.12,
    )
    .to(
      divider,
      {
        autoAlpha: 1,
        scaleX: 1,
        duration: 0.72,
      },
      0.38,
    )
    .to(
      figures,
      {
        autoAlpha: 1,
        y: 0,
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.05,
        stagger: 0.12,
      },
      0.52,
    )
    .to(
      images,
      {
        scale: 1,
        filter: "blur(0px) saturate(0.92) contrast(1.02)",
        duration: 1.25,
        stagger: 0.12,
      },
      0.52,
    )
    .to(
      body,
      {
        autoAlpha: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.9,
      },
      0.98,
    )
    .to(
      button,
      {
        autoAlpha: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.72,
      },
      1.18,
    );
};

const initStayAnimation = () => {
  const stay = document.querySelector("#stay");

  if (!stay) return;

  const introGrid = stay.querySelector(".grid.overflow-hidden");
  const textPanel = introGrid?.firstElementChild;
  const textItems = textPanel?.querySelectorAll("p, h2, a") ?? [];
  const featureFigure = introGrid?.querySelector("figure");
  const featureImage = featureFigure?.querySelector("img");
  const cards = stay.querySelectorAll(".mt-5.grid a");
  const cardImages = stay.querySelectorAll(".mt-5.grid img");

  setBlurHidden(textItems);
  setImageHidden([featureFigure].filter(Boolean), [featureImage].filter(Boolean), 0);
  setBlurHidden(cards, 44, 10);
  gsap.set(cardImages, {
    scale: 1.08,
    filter: "blur(8px) saturate(0.92) contrast(1.02)",
    transformOrigin: "center center",
  });

  const introTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: stay,
      start: "top 68%",
      once: true,
    },
    defaults: {
      ease: "power3.out",
    },
  });

  introTimeline
    .to(textItems, {
      ...revealVars,
      duration: 0.86,
      stagger: 0.12,
    })
    .to(
      featureFigure,
      {
        autoAlpha: 1,
        y: 0,
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.1,
      },
      0.18,
    )
    .to(
      featureImage,
      {
        scale: 1,
        filter: "blur(0px) saturate(0.92) contrast(1.02)",
        duration: 1.28,
      },
      0.18,
    );

  gsap
    .timeline({
      scrollTrigger: {
        trigger: cards[0],
        start: "top 82%",
        once: true,
      },
      defaults: {
        ease: "power3.out",
      },
    })
    .to(cards, {
      ...revealVars,
      duration: 0.86,
      stagger: 0.14,
    })
    .to(
      cardImages,
      {
        scale: 1,
        filter: "blur(0px) saturate(0.92) contrast(1.02)",
        duration: 1.1,
        stagger: 0.14,
      },
      0,
    );
};

const initFeaturePanelAnimations = () => {
  document.querySelectorAll("#dining article").forEach((article) => {
    const image = article.querySelector("img");
    const content = article.querySelectorAll("p, h2, a");

    setBlurHidden(content, 34, 12);
    gsap.set(image, {
      autoAlpha: 0,
      scale: 1.14,
      filter: "blur(10px) saturate(0.92) contrast(1.02)",
      transformOrigin: "center center",
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: article,
          start: "top 74%",
          once: true,
        },
        defaults: {
          ease: "power3.out",
        },
      })
      .to(image, {
        autoAlpha: 1,
        scale: 1,
        filter: "blur(0px) saturate(0.92) contrast(1.02)",
        duration: 1.25,
      })
      .to(
        content,
        {
          ...revealVars,
          duration: 0.8,
          stagger: 0.1,
        },
        0.22,
      );
  });
};

const initWeddingsAnimation = () => {
  const section = document.querySelector("#weddings");

  if (!section) return;

  const textItems = section.querySelectorAll("p, h2, a");
  const figure = section.querySelector("figure");
  const image = section.querySelector("figure img");

  setBlurHidden(textItems);
  setImageHidden([figure].filter(Boolean), [image].filter(Boolean));

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top 68%",
      once: true,
    },
    defaults: {
      ease: "power3.out",
    },
  });

  timeline.to(textItems, {
    ...revealVars,
    duration: 0.86,
    stagger: 0.12,
  });

  revealImages(timeline, [figure].filter(Boolean), [image].filter(Boolean), 0.18);
};

const initGalleryAnimation = () => {
  const gallery = document.querySelector("#gallery");

  if (!gallery) return;

  const headerItems = gallery.querySelectorAll("p, h2, button");
  const slides = gallery.querySelectorAll(".embla__slide");
  const images = gallery.querySelectorAll(".embla__slide img");

  setBlurHidden(headerItems, 34, 12);
  setBlurHidden(slides, 54, 10);
  gsap.set(images, {
    scale: 1.08,
    filter: "blur(8px) saturate(0.92) contrast(1.02)",
    transformOrigin: "center center",
  });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: gallery,
        start: "top 70%",
        once: true,
      },
      defaults: {
        ease: "power3.out",
      },
    })
    .to(headerItems, {
      ...revealVars,
      duration: 0.82,
      stagger: 0.1,
    })
    .to(
      slides,
      {
        ...revealVars,
        duration: 0.9,
        stagger: 0.08,
      },
      0.28,
    )
    .to(
      images,
      {
        scale: 1,
        filter: "blur(0px) saturate(0.92) contrast(1.02)",
        duration: 1.08,
        stagger: 0.08,
      },
      0.28,
    );
};

const initTestimonialsAnimation = () => {
  const section = document.querySelector("#testimonials");

  if (!section) return;

  const headerItems = section.querySelectorAll("div:first-child > p, div:first-child > h2");
  const quotes = section.querySelectorAll("figure");

  setBlurHidden(headerItems, 34, 12);
  setBlurHidden(quotes, 42, 10);

  gsap
    .timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
        once: true,
      },
      defaults: {
        ease: "power3.out",
      },
    })
    .to(headerItems, {
      ...revealVars,
      duration: 0.82,
      stagger: 0.12,
    })
    .to(
      quotes,
      {
        ...revealVars,
        duration: 0.82,
        stagger: 0.1,
      },
      0.28,
    );
};

const initStoriesAnimation = () => {
  const section = document.querySelector("#stories");

  if (!section) return;

  const header = section.querySelector(":scope > div > div:first-child");
  const headerItems = header?.querySelectorAll("p, h2, a") ?? [];
  const cards = section.querySelectorAll("article");
  const images = section.querySelectorAll("article img");

  setBlurHidden(headerItems, 34, 12);
  setBlurHidden(cards, 50, 10);
  gsap.set(images, {
    scale: 1.1,
    filter: "blur(8px) saturate(0.92) contrast(1.02)",
    transformOrigin: "center center",
  });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
        once: true,
      },
      defaults: {
        ease: "power3.out",
      },
    })
    .to(headerItems, {
      ...revealVars,
      duration: 0.82,
      stagger: 0.1,
    })
    .to(
      cards,
      {
        ...revealVars,
        duration: 0.86,
        stagger: 0.12,
      },
      0.28,
    )
    .to(
      images,
      {
        scale: 1,
        filter: "blur(0px) saturate(0.92) contrast(1.02)",
        duration: 1.08,
        stagger: 0.12,
      },
      0.28,
    );
};

const initBookAnimation = () => {
  const section = document.querySelector("#book");

  if (!section) return;

  const background = section.querySelector(":scope > img");
  const intro = section.querySelector(":scope > div.relative.flex");
  const heroItems = intro?.querySelectorAll("p, span, h2, a") ?? [];
  const footer = section.querySelector("footer");
  const footerItems = footer?.querySelectorAll("a, p, span") ?? [];
  const bigMark = section.querySelector(":scope > div:last-of-type p");

  gsap.set(background, {
    scale: 1.12,
    filter: "blur(8px) saturate(0.92) contrast(1.02)",
    transformOrigin: "center center",
  });
  setBlurHidden(heroItems, 34, 12);
  gsap.set(footer, {
    autoAlpha: 0,
    y: 72,
    clipPath: "inset(10% 0% 0% 0%)",
  });
  setBlurHidden(footerItems, 28, 8);
  gsap.set(bigMark, {
    autoAlpha: 0,
    y: 64,
    filter: "blur(16px)",
  });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 72%",
        once: true,
      },
      defaults: {
        ease: "power3.out",
      },
    })
    .to(background, {
      scale: 1,
      filter: "blur(0px) saturate(0.92) contrast(1.02)",
      duration: 1.45,
    })
    .to(
      heroItems,
      {
        ...revealVars,
        duration: 0.82,
        stagger: 0.1,
      },
      0.22,
    )
    .to(
      footer,
      {
        autoAlpha: 1,
        y: 0,
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1,
      },
      0.7,
    )
    .to(
      footerItems,
      {
        ...revealVars,
        duration: 0.72,
        stagger: 0.035,
      },
      0.98,
    )
    .to(
      bigMark,
      {
        autoAlpha: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.1,
      },
      1.08,
    );
};

const initMenu = () => {
  const menu = document.getElementById("site-menu");
  const toggle = document.getElementById("menu-toggle");

  if (!menu || !toggle) return;

  const closers = menu.querySelectorAll("[data-menu-close]");
  let isOpen = false;

  const open = () => {
    if (isOpen) return;
    isOpen = true;
    menu.classList.add("is-open");
    menu.setAttribute("aria-hidden", "false");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close menu");
    document.body.classList.add("menu-open");
    if (smoother) smoother.paused(true);
  };

  const close = () => {
    if (!isOpen) return;
    isOpen = false;
    menu.classList.remove("is-open");
    menu.setAttribute("aria-hidden", "true");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
    document.body.classList.remove("menu-open");
    if (smoother) smoother.paused(false);
  };

  toggle.addEventListener("click", () => {
    if (isOpen) close();
    else open();
  });

  closers.forEach((el) => {
    el.addEventListener("click", () => close());
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && isOpen) close();
  });
};

initScrollSmoother();
initHeroAnimation();
initAboutAnimation();
initStayAnimation();
initFeaturePanelAnimations();
initWeddingsAnimation();
initGalleryAnimation();
initTestimonialsAnimation();
initStoriesAnimation();
initBookAnimation();
initMenu();

window.addEventListener("load", () => ScrollTrigger.refresh());
