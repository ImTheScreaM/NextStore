'use client'

import {logout} from "@/app/lib/action";
import {cookies} from "next/headers";


export default function User() {


	return <button onClick={logout}>Logout</button>
}
