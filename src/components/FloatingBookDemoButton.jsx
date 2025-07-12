import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import BookDemoForm from "@/components/BookDemoForm";

export default function FloatingBookDemoButton() {
    const [show, setShow] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setShow(scrollY > 120);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {show && (
                <div className="fixed bottom-6 right-6 z-50">
                    <Button
                        className="bg-[#1F1F2F] text-white hover:bg-[#2F2F3F] shadow-lg rounded-full px-6 py-3 transition duration-300"
                        onClick={() => setOpen(true)}
                    >
                        Book Demo
                    </Button>
                </div>
            )}

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="max-w-xl p-0 overflow-hidden rounded-xl">
                    <BookDemoForm showTrigger={false} open={open} onOpenChange={setOpen} />
                </DialogContent>
            </Dialog>
        </>
    );
}
