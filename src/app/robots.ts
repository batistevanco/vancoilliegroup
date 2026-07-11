import type {MetadataRoute} from "next";
export default function robots():MetadataRoute.Robots{return{rules:{userAgent:"*",allow:"/"},sitemap:"https://vancoillie.group/sitemap.xml",host:"https://vancoillie.group"}}
