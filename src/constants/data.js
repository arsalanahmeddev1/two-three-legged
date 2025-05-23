
export const nav = [
  {name: 'Market Place', href: '/'},
  {name: 'Community Partners', href: '/'},
  {name: 'Work with Us', href: '/'},
  {name: 'About us', href: '/'},
]

export const selects = [
  {
    name: "category",
    label: "Category",
    options: [
      { label: "Art", value: "art" },
      { label: "Photography", value: "photography" },
    ],
  },
  {
    name: "artist",
    label: "Artist",
    options: [
      { label: "John Doe", value: "john" },
      { label: "Jane Smith", value: "jane" },
    ],
  },
  {
    name: "style",
    label: "Style",
    options: [
      { label: "Modern", value: "modern" },
      { label: "Abstract", value: "abstract" },
    ],
  },
  {
    name: "medium",
    label: "Medium",
    options: [
      { label: "Oil", value: "oil" },
      { label: "Digital", value: "digital" },
    ],
  },
  {
    name: "price",
    label: "Price Range",
    options: [
      { label: "Under $500", value: "<500" },
      { label: "$500 - $1000", value: "500-1000" },
    ],
  },
  {
    name: "availability",
    label: "Availability",
    options: [
      { label: "In Stock", value: "in-stock" },
      { label: "Sold Out", value: "sold-out" },
    ],
  },
];

export const categories = [
  {
    img: "/images/category-01.png",
    title: "interior designers",
    description: "Sourcing art for a client?",
    link: "/",
  },
  {
    img: "/images/category-02.png",
    title: "Commercial",
    description: "Sourcing art for your business?",
    link: "/",
  },
  {
    img: "/images/category-03.png",
    title: "residential",
    description: "Sourcing art for your home?",
    link: "/",
  },
  {
    img: "/images/category-04.png",
    title: "collectors",
    description: "Are you a patron of the arts?",
    link: "/",
  },
  {
    img: "/images/category-05.png",
    title: "Artists",
    description: "Want to join our squad?",
    link: "/",
  },
  
]

  export const contactInputs = [
    {
      type: "text",
      name: "firstName",
      placeholder: "First Name",
      variant: "contact",
      className: 'w-1/2'
    },
    {
      type: "text",
      name: "lastName",
      placeholder: "Last Name",
      variant: "contact",
      className: 'w-1/2'
    },
    {
      type: "email",
      name: "email",
      placeholder: "Email",
      variant: "contact",
      className: 'w-1/2'
    },
    {
      type: "phone",
      name: "name",
      placeholder: "Phone no",
      variant: "contact",
      className: 'w-1/2'
    },
    {
      type: "select",
      name: "service",
      placeholder: "Which service are you intereted in?",
      options: [
        { label: "Art", value: "art" },
        { label: "Photography", value: "photography" },
      ],
      className: 'w-full'
    },
    {
      type: "textarea",
      name: "message",
      placeholder: "Message",
      className: 'w-full'
    },
      
  ]