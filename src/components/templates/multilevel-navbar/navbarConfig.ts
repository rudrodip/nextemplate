import { DefaultNavbarItem } from "./types";

export const navbarConfig: DefaultNavbarItem[] = [
  {
    title: "Home",
    href: "#",
    children: [],
  },
  {
    title: "Products",
    href: "#",
    children: [
      {
        title: "Electronics",
        href: "#",
        children: [
          {
            title: "Laptops",
            href: "#",
            children: [
              {
                title: "Gaming Laptops",
                href: "#",
                children: [],
              },
              {
                title: "Business Laptops",
                href: "#",
                children: [],
              },
            ],
          },
          {
            title: "Smartphones",
            href: "#",
            children: [
              {
                title: "Android",
                href: "#",
                children: [],
              },
              {
                title: "iOS",
                href: "#",
                children: [],
              },
            ],
          },
        ],
      },
      {
        title: "Clothing",
        href: "#",
        children: [
          {
            title: "Men's",
            href: "#",
            children: [
              {
                title: "Casual",
                href: "#",
                children: [],
              },
              {
                title: "Formal",
                href: "#",
                children: [],
              },
            ],
          },
          {
            title: "Women's",
            href: "#",
            children: [
              {
                title: "Summer Dresses",
                href: "#",
                children: [],
              },
              {
                title: "Winter Coats",
                href: "#",
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "New Category",
    href: "#",
    children: [
      {
        title: "Subcategory A",
        href: "#",
        children: [],
      },
      {
        title: "Subcategory B",
        href: "#",
        children: [],
      },
      {
        title: "Subcategory C",
        href: "#",
        children: [
          {
            title: "Item 1",
            href: "#",
            children: [],
          },
          {
            title: "Item 2",
            href: "#",
            children: [],
          },
        ],
      },
      {
        title: "Subcategory D",
        href: "#",
        children: [
          {
            title: "Item 1",
            href: "#",
            children: [],
          },
          {
            title: "Item 2",
            href: "#",
            children: [],
          },
        ],
      },
    ],
  },
  {
    title: "About Us",
    href: "#",
    children: [],
  },
  {
    title: "Contact",
    href: "#",
    children: [],
  },
];
