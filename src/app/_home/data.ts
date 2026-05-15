export type Project = {
  title: string;
  category: string;
  year: string;
  description: string;
  image: string;
  alt: string;
  offset?: boolean;
};

export const projects: Project[] = [
  {
    title: "Residencia Valle Alto",
    category: "Residencial",
    year: "2023",
    description: "Cerramientos minimalistas en aluminio anodizado.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB7h9E7JC08_Wv6ag-Yf3k9BCvDFyvjoioqcTcQSng_ifazFiw_JmVzlk58KoA8_LkUyiT17RpKSPz_VSGubl8AWz94PZur1r6PdFnMWYVg0kWkDq30u4ob16j7TBMNzFOgJVZUfWphnAuZNM7eaY_QnzfeVq0-GAfIZGazRjHNtOhDvDDUDFPNhU6CsOG3tP-90u7Hi807nd8EPA_SWrVHjd--UJd7TZBUhOqhNU3iDnI55gmLZBtendfERV91b58jRc53noZ2WSM",
    alt: "Residencia contemporánea con cerramientos amplios en un entorno natural.",
  },
  {
    title: "Edificio Nexus Green",
    category: "Corporativo",
    year: "2022",
    description: "Fachada integral con control solar inteligente.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD0s7Ikg5WgXUPFq_Q0yzX6jVK1ARA5vqmGOxxKCE0ssBCCZl5Us8cfJxW0HAwcZx6CTDEUhDl477tipQi6c6Mbp3VtArmBWZBbOj_4GqvSMpWWl50vYQv8svR8jUX1NvE6WtckQstE5AWm3jZdrtDZL14NcliVigPgnPYo3o_GjriT-M02BvPdorp0jxZRe2-AKF0HOOqxJPpEsC3v7qNTqFcZYv37caOLAdQjbI-9RyhqvDCAf1NWsBb23AdhJVYUvE-OiSB2a8k",
    alt: "Lobby corporativo moderno con muro cortina de vidrio de gran altura.",
    offset: true,
  },
  {
    title: "Villa Marítima",
    category: "Residencial",
    year: "2023",
    description: "Correderas elevables de gran formato en PVC.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB-42SzUPLp2H2kVYrwf-QBJZ2eONDfu9OvRalESbmIGMYiUVRLVu199FM1omTlDmflJHd_ktOrCQHtck2EFrpVLRPZYdmnVKZhkzxNSFPN2Hte9geD_Cb2nhRYjHYhwJoSC_5OpMwBGEd8Q7O5FhYVlivB9D_E5HB8w35wEyW6rgJ3qEgdfp6sBzqqlnCyZQBw6p5GK6D9b-5fctT-8OY_ZczIaMlRN2JMq9OXPaRn79yY_N2mFubMt96uvHVvZhSkR-mB_dHVEHI",
    alt: "Villa costera moderna con grandes puertas corredizas hacia la terraza.",
  },
];
