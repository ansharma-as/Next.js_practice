import dbConnect from "@/lib/mongoose";
import User from "@/models/User";

export async function POST(req) {
  try {
    await dbConnect();

    const body = await req.json();
    console.log("Received body:", body);

    const newUser = await User.create({
      username: body.username,
      password: body.password, 
    });

    console.log("User created:", newUser);

    return new Response(
      JSON.stringify({
        message: "User created successfully",
        user: { id: newUser._id, username: newUser.username },
      }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    if (error.code === 11000) {
      return new Response(
        JSON.stringify({ error: "Username already exists" }),
        { status: 409, headers: { "Content-Type": "application/json" } }
      );
    }
    return new Response(
      JSON.stringify({ error: "Failed to create user" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
