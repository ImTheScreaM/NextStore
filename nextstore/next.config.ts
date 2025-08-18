import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images:{
		domains:['storage.googleapis.com','fakestoreapi.com']
	},
	env: {
		PRODUCT:process.env.API_PRODUCT
	}
};

export default nextConfig;
