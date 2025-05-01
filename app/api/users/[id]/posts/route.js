import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (request,{params})=>{
  
    try{
        await connectToDB();

        const prompts= await Prompt.find({
            creator:params.id
        }).populate('creator');
        // console.log("Creator field in prompts:", prompts.map(p => p.creator.image)); // Debugging line
        // console.log(prompts)
        // console.log(JSON.stringify(prompts))
        return new Response(JSON.stringify(prompts), {status:200})
    }catch(error){
        return new Response('Failed to fetch all prompts', {status:500})
    }
}

// import { connectToDB } from "@utils/database";
// import Prompt from "@models/prompt";

// export const GET = async (request, { params }) => {
//   console.log("Fetching prompts for user ID:", params.id); // Debugging line
//   try {
//     // In newer Next.js versions, you need to await params when using dynamic API routes
//     const id = params.id;
    
//     // Add validation for id
//     if (!id) {
//       return new Response("Missing creator ID parameter", { status: 400 });
//     }

//     await connectToDB();
    
//     // Use the extracted id variable
//     const prompts = await Prompt.find({
//       creator: id
//     }).populate('creator');
    
//     return new Response(JSON.stringify(prompts), { status: 200 });
//   } catch (error) {
//     console.error("Error fetching prompts:", error);
//     return new Response("Failed to fetch prompts", { status: 500 });
//   }
// }