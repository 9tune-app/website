import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import AuthClientButton from "./authClientButton"
import { cookies } from "next/headers"

export type AuthServerButtonProps = {

}
export default async function AuthServerButton( props: AuthServerButtonProps ) {
    const supabase = createServerComponentClient({cookies})
    const { data: user } = await supabase.auth.getSession();
    const session = user.session;
    return(
        <AuthClientButton session={session}></AuthClientButton>
    )
}