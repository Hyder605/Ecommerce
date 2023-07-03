import { NextRequest, NextResponse } from "next/server";
import { cartTable, db } from "@/lib/drizzle";
import {v4 as uuid} from "uuid"
import { cookies } from "next/dist/client/components/headers";


export async function GET(request:NextRequest){
    try {
        const res=await db.select().from(cartTable)
        return NextResponse.json({res})

    } catch (error) {
        return NextResponse.json({message:"something went wrong"})
        
    }
}

export async function POST(request:NextRequest){
        const req=await request.json()
        const uid=uuid();
        const setCookies=cookies();
        const user_idcheck=setCookies.get("user_id")
    if(!user_idcheck){
        setCookies.set("user_id",uid)
    }
    try {
        const res=await db.insert(cartTable).values({
            product_id:req.product_id,
            quantity:req.quantity,
            user_id:setCookies.get("user_id")?.value as string
        }).returning();
        return NextResponse.json({res})

    } catch (error) {
        return NextResponse.json({message:"something went wrong"})
        
    }
}