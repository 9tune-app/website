//import { Database } from "@/lib/database.types";
import { SupabaseClient, createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers";


//const getDetailMusic = async ( id: number, supabase: SupabaseClient<Database> ) => {
const getDetailMusic = async ( id: number, supabase: SupabaseClient ) => {
    const {data: music} = await supabase.from('music').select('*').eq("id", id).single();
    return music;
}

export default async function MusicDetailPage({params}: {params: {music_id: number}}) {
    const supabase = createServerComponentClient({ cookies });
//    const supabase = createServerComponentClient<Database>({ cookies });
    const music = await getDetailMusic( params.music_id, supabase );
    return(
        <div className="w-full max-w-3xl mx-auto py-16 px-8">
            <h1 className="text-3xl mb-6">{music?.title}</h1>
            <p className="mb-8">{music?.description}</p>
        </div>
    )
}