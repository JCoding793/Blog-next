import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req , {params}) => {
  const {slug} = params;
  try {
    const posts = await prisma.post.findUnique({
      where: {slug},
      include: {user: true}
    });

    return new NextResponse(JSON.stringify(posts, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};