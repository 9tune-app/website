import { Menubar, MenubarCheckboxItem, MenubarContent, MenubarItem, MenubarLabel, MenubarMenu, MenubarRadioGroup, MenubarRadioItem, MenubarSeparator, MenubarShortcut, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger, } from "@/components/ui/menubar";
import Link from "next/link";
import { Button } from "../ui/button";
import AuthButton from "./authButton";
import AuthServerButton from "./authServerButton";



export type HeaderProps = {

}
export default function Header( props: HeaderProps ) {
    return (
        <div className="flex justify-between">
            <Menubar className="rounded-none border-b border-none px-2 lg:px-4">
                <MenubarMenu>
                    <MenubarTrigger className="font-bold">9tune</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>
                            <Link href="/">Top Page</Link>
                        </MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>
                            About Us
                        </MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>
                            Pricing
                        </MenubarItem>
                        <MenubarItem>
                            Contact
                        </MenubarItem>
                        <MenubarShortcut />
                        <MenubarSub>
                            <MenubarSubTrigger>Others</MenubarSubTrigger>
                            <MenubarSubContent>
                                <MenubarItem>Privacy Policy</MenubarItem>
                                <MenubarItem>Organization</MenubarItem>
                            </MenubarSubContent>
                        </MenubarSub>
                    </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger className="relative">Settings</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>Change Plan</MenubarItem>
                        <MenubarItem>Language</MenubarItem>
                        <MenubarItem>Detail</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger>Music</MenubarTrigger>
                    <MenubarContent>
                        <MenubarCheckboxItem checked>Show Favorites</MenubarCheckboxItem>
                        <MenubarCheckboxItem>Sarch</MenubarCheckboxItem>
                        <MenubarSeparator />
                        <MenubarItem inset disabled>
                            Upload Music
                        </MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem inset>Request Original</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger className="hidden md:block">Musician</MenubarTrigger>
                    <MenubarContent forceMount>
                        <MenubarLabel inset>Switch Account</MenubarLabel>
                        <MenubarSeparator />
                        <MenubarRadioGroup value="benoit">
                            <MenubarRadioItem value="andy">Artist 1</MenubarRadioItem>
                            <MenubarRadioItem value="benoit">Artist 2</MenubarRadioItem>
                        </MenubarRadioGroup>
                        <MenubarSeparator />
                        <MenubarItem inset>Tools</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem inset>Add Artists...</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger className="hidden md:block">Creator</MenubarTrigger>
                    <MenubarContent forceMount>
                        <MenubarLabel inset>Switch Account</MenubarLabel>
                        <MenubarSeparator />
                        <MenubarRadioGroup value="benoit">
                            <MenubarRadioItem value="andy">Channel 1</MenubarRadioItem>
                            <MenubarRadioItem value="benoit">Channel 2</MenubarRadioItem>
                            <MenubarRadioItem value="Luis">Channel 3</MenubarRadioItem>
                        </MenubarRadioGroup>
                        <MenubarSeparator />
                        <MenubarItem inset>Tools</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem inset>Add Channel...</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
            </Menubar>
            <AuthServerButton></AuthServerButton>
        </div>
    );
}
