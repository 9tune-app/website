"use client"
import { Session, createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Button } from "../ui/button";
import React from "react";
import { useRouter } from "next/navigation";

export type AuthButtonProps = {
    session: Session | null;
}
export default function AuthClientButton( props: AuthButtonProps ) {
    const router = useRouter();
    const supabase = createClientComponentClient();
    const handleSignIn = async () => {
        await supabase.auth.signInWithOAuth({
            provider: "github",
            options: {
                redirectTo: `${location.origin}/auth/callback`
            }
        });
    }
    const handleSignOut = async () => {
        await supabase.auth.signOut();
        router.refresh();
    }
    return(
        <div className="rounded-none border-b border-none px-2 lg:px-4">
            { props.session? (
                <Button onClick={handleSignOut}>ログアウト</Button>
            ) : (
                <Button onClick={handleSignIn}>ログイン</Button>
            ) }
        </div>
    );
}