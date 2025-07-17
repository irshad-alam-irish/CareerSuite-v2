import { useState } from "react";
import {
    Menu,
    LineChart,
    ShieldCheck,
    Sparkles,
    BookOpenCheck,
    Network,
    Users,
    Target,
    Award,
    HelpCircle,
    Brain,
    Globe,
    CheckCircle,
} from "lucide-react";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";

const BookDemoForm = ({ triggerText = "Book Demo" }) => {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        agreed: false,
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setOpen(false);
            setSubmitted(false);
            setFormData({
                name: "",
                email: "",
                message: "",
                agreed: false,
            });
        }, 2000);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="bg-[#1F1F2F] text-white hover:bg-[#2F2F3F] font-inter text-sm">
                    {triggerText}
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-xl rounded-2xl bg-white p-6 sm:p-10 font-inter">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-[#1e1e2f]">
                        {submitted ? "Success!" : "We're thrilled to connect!"}
                    </DialogTitle>
                    <DialogDescription className="text-gray-600 text-sm mt-1">
                        {submitted
                            ? "Thank you for booking a demo with CareerSuite. We'll be in touch soon!"
                            : "Let's take the first step toward smarter career growth."}
                    </DialogDescription>
                </DialogHeader>
                {!submitted ? (
                    <div className="space-y-5 mt-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input
                                name="name"
                                type="text"
                                placeholder="Your Name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
                            />
                            <input
                                name="email"
                                type="email"
                                placeholder="Your Email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
                            />
                        </div>
                        <textarea
                            name="message"
                            rows="4"
                            placeholder="Leave your message here..."
                            required
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#2563eb]"
                        />
                        <div className="flex items-start gap-2 text-sm text-gray-600">
                            <input
                                type="checkbox"
                                id="terms"
                                name="agreed"
                                required
                                checked={formData.agreed}
                                onChange={handleChange}
                                className="mt-1"
                            />
                            <label htmlFor="terms">
                                I agree to the{" "}
                                <a
                                    href="#"
                                    className="underline text-[#2563eb] hover:text-[#1e40af]"
                                >
                                    terms and conditions
                                </a>
                            </label>
                        </div>
                        <Button
                            onClick={handleSubmit}
                            className="w-full bg-[#1F1F2F] hover:bg-[#2F2F3F] text-white text-sm font-semibold py-2 px-4 rounded-lg"
                        >
                            Submit
                        </Button>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-10">
                        <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                        <p className="text-lg font-medium text-gray-700">
                            We'll be in touch shortly!
                        </p>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
};

const Navbar1 = () => {
    const menu = [
        { title: "Home", url: "/" },
        {
            title: "Features",
            items: [
                {
                    title: "Talent Analytics",
                    description: "Real-time dashboards and workforce insights",
                    icon: <LineChart className="size-5" />,
                    url: "#analytics",
                },
                {
                    title: "Upskilling Programs",
                    description: "Tailored learning paths based on skill gaps",
                    icon: <Sparkles className="size-5" />,
                    url: "#upskilling",
                },
                {
                    title: "Career Planning",
                    description: "Personalized growth strategies",
                    icon: <BookOpenCheck className="size-5" />,
                    url: "#career",
                },
                {
                    title: "Talent Demand Management",
                    description: "Forecast organizational skill needs",
                    icon: <Network className="size-5" />,
                    url: "#demand",
                },
                {
                    title: "Secure & Scalable",
                    description: "Enterprise-grade security and architecture",
                    icon: <ShieldCheck className="size-5" />,
                    url: "#security",
                },
            ],
        },
        {
            title: "FAQ",
            items: [
                {
                    title: "Why CareerSuite?",
                    description: "First AI-powered career platform",
                    icon: <HelpCircle className="size-5" />,
                    url: "#why-careersuite",
                },
                {
                    title: "What makes us different?",
                    description: "Real-time skill gap learning paths",
                    icon: <Brain className="size-5" />,
                    url: "#what-different",
                },
                {
                    title: "How do we scale globally?",
                    description: "Multi-language and regional support",
                    icon: <Globe className="size-5" />,
                    url: "#global-scale",
                },
            ],
        },
        {
            title: "About Us",
            items: [
                {
                    title: "Our Mission",
                    description: "Empowering growth through AI",
                    icon: <Target className="size-5" />,
                    url: "#mission",
                },
                {
                    title: "Our Team",
                    description: "Meet the people behind CareerSuite",
                    icon: <Users className="size-5" />,
                    url: "#team",
                },
                {
                    title: "Success Stories",
                    description: "How we transformed careers",
                    icon: <Award className="size-5" />,
                    url: "#success",
                },
            ],
        },
        { title: "Contact Us", url: "#contact" },
    ];

    return (
        <section
            className="py-4 border-b border-[#dcdcdc]"
            style={{
                height: "70px",
                fontFamily: "Inter, sans-serif",
                background:
                    "linear-gradient(135deg, #d0e7ff 0%, #e3f0ff 60%, #ebf5fa 100%)",
            }}
        >
            <div className="container max-w-screen-xl mx-auto px-4">
                <nav className="hidden lg:flex justify-between items-center">
                    <div className="flex items-center gap-6">
                        <a href="/" className="flex items-center gap-2">
                            <img
                                src="/logo2.png"
                                alt="CareerSuite Logo"
                                className="h-[40px] rounded-[5px]"
                            />
                        </a>
                        <NavigationMenu>
                            <NavigationMenuList className="text-sm font-medium text-black space-x-2">
                                {menu.map((item) => renderMenuItem(item))}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                    <BookDemoForm />
                </nav>

                {/* Mobile Nav */}
                <div className="block lg:hidden">
                    <div className="flex justify-between items-center">
                        <a href="/" className="flex items-center gap-2">
                            <span className="text-xl font-bold tracking-tight">
                                <span className="text-[#2563eb]">Career</span>
                                <span className="text-[#7c3aed]">Suite</span>
                            </span>
                        </a>
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="outline" size="icon">
                                    <Menu className="size-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent className="overflow-y-auto">
                                <SheetHeader>
                                    <SheetTitle>
                                        <a href="/" className="flex items-center gap-2">
                                            <span className="text-xl font-bold tracking-tight">
                                                <span className="text-[#2563eb]">Career</span>
                                                <span className="text-[#7c3aed]">Suite</span>
                                            </span>
                                        </a>
                                    </SheetTitle>
                                </SheetHeader>
                                <div className="flex flex-col gap-6 p-4">
                                    <Accordion
                                        type="single"
                                        collapsible
                                        className="flex flex-col w-full gap-4"
                                    >
                                        {menu.map((item) => renderMobileMenuItem(item))}
                                    </Accordion>
                                    <BookDemoForm />
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Reusable Sub Menu Item Renderers
const renderMenuItem = (item) => {
    if (item.items) {
        return (
            <NavigationMenuItem key={item.title}>
                <NavigationMenuTrigger className="text-black bg-transparent font-inter">
                    {item.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="text-black h-[180px]">
                    <div
                        className={`grid gap-3 p-4 h-full ${item.title === "Features"
                                ? "grid-cols-5 w-[1000px]"
                                : item.title === "FAQ"
                                    ? "grid-cols-3 w-[800px]"
                                    : "grid-cols-3 w-[600px]"
                            }`}
                    >
                        {item.items.map((subItem) => (
                            <NavigationMenuLink asChild key={subItem.title}>
                                <SubMenuLink item={subItem} />
                            </NavigationMenuLink>
                        ))}
                    </div>
                </NavigationMenuContent>
            </NavigationMenuItem>
        );
    }
    return (
        <NavigationMenuItem key={item.title}>
            <NavigationMenuLink
                href={item.url}
                className="group inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-black hover:bg-muted"
            >
                {item.title}
            </NavigationMenuLink>
        </NavigationMenuItem>
    );
};

const renderMobileMenuItem = (item) => {
    if (item.items) {
        return (
            <AccordionItem key={item.title} value={item.title} className="border-b-0">
                <AccordionTrigger className="text-md font-semibold text-black hover:no-underline">
                    {item.title}
                </AccordionTrigger>
                <AccordionContent className="mt-2">
                    {item.items.map((subItem) => (
                        <SubMenuLink key={subItem.title} item={subItem} />
                    ))}
                </AccordionContent>
            </AccordionItem>
        );
    }
    return (
        <a key={item.title} href={item.url} className="text-md font-semibold text-black">
            {item.title}
        </a>
    );
};

const SubMenuLink = ({ item }) => (
    <a
        href={item.url}
        className="flex flex-col justify-center text-center gap-2 rounded-md p-3 leading-none transition-colors text-black hover:bg-[linear-gradient(135deg,_#e3effc,_#f3faff)]"
    >
        <div className="self-center">{item.icon}</div>
        <div>
            <div className="text-sm font-semibold">{item.title}</div>
            {item.description && (
                <p className="text-xs text-gray-600 mt-1">{item.description}</p>
            )}
        </div>
    </a>
);

export default Navbar1;
