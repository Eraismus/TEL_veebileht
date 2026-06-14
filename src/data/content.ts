import members from "../content/members.json";
import plan from "../content/plan.json";
import products from "../content/products.json";
import projects from "../content/projects.json";
import site from "../content/site.json";

export type Language = "et" | "en";

export type LocalizedText = Record<Language, string>;

export interface LinkItem {
  label: string;
  url: string;
}

export interface FocusArea {
  title: LocalizedText;
  description: LocalizedText;
}

export interface Member {
  name: string;
  role: LocalizedText;
  bio: LocalizedText;
  email: string;
  image: string;
  links: LinkItem[];
}

export interface Project {
  title: LocalizedText;
  period: string;
  status: LocalizedText;
  partner: LocalizedText;
  summary: LocalizedText;
  url: string;
}

export interface Product {
  title: LocalizedText;
  type: LocalizedText;
  status: LocalizedText;
  summary: LocalizedText;
  url: string;
}

export interface PlanItem {
  period: LocalizedText;
  title: LocalizedText;
  summary: LocalizedText;
}

export const content = {
  site,
  members: members as Member[],
  projects: projects as Project[],
  products: products as Product[],
  plan: plan as PlanItem[]
};
