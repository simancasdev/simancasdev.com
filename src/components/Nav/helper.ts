type Href = {
  label: string;
  link: `/${string}`;
};

export const hrefs: Href[] = [
  {label: "Home", link: "/"},
  {label: "Pricing", link: "/pricing"},
  {label: "Feedbacks", link: "/feedbacks"},
  {label: "NPM Packages", link: "/npm-packages"},
  {label: "About", link: "/about"},
];
