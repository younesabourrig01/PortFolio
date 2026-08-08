import { useRef, useState } from "preact/hooks";

type StatusType = {
    status: boolean;
    message: string;
};

const ContactForm = () => {
    const [mailStatus, setMailStatus] = useState<StatusType>({ status: false, message: "" });
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    const handleFormSubmit = async (event: SubmitEvent) => {
        event.preventDefault();

        if (!nameRef.current || !emailRef.current || !messageRef.current) return;

        const name = nameRef.current.value.trim();
        const email = emailRef.current.value.trim();
        const message = messageRef.current.value.trim();

        try {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                throw new Error("Invalid email address.");
            }

            setIsLoading(true);

            const formData = new FormData();
            formData.append("access_key", "575e3bd3-3353-4ef0-b698-e90a605d9304");
            formData.append("name", name);
            formData.append("email", email);
            formData.append("message", message);
            formData.append("subject", "New portfolio contact message");

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });
            const result = await response.json();

            if (!response.ok || !result.success) {
                throw new Error(result.message || "Message not sent.");
            }

            setMailStatus({ status: true, message: "Message sent!" });

            nameRef.current.value = "";
            emailRef.current.value = "";
            messageRef.current.value = "";
        } catch (error) {
            if (error instanceof Error) {
                setMailStatus({ status: false, message: error.message });
            } else {
                setMailStatus({ status: false, message: "An unknown error occurred." });
            }
        } finally {
            setIsLoading(false);
            setTimeout(() => {
                setMailStatus({ status: false, message: "" });
            }, 3000);
        }
    };

    return (
        <form onSubmit={handleFormSubmit} className="Fade_Up LinkBtnGradient rounded-md w-full lg:max-w-[650px] px-4 py-2 outline outline-white/20 flex_center flex-col">
            <label htmlFor="name" className="noCustomCursor w-full h-fit flex justify-center items-start flex-col px-1 py-2">
                Name
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your Name"
                    className="w-full p-2 mt-1 rounded-md border-none outline-none bg-background text-foreground"
                    autoComplete="name"
                    required
                    ref={nameRef}
                />
            </label>
            <label htmlFor="email" className="noCustomCursor w-full h-fit flex justify-center items-start flex-col px-1 py-2">
                Email
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="example@gmail.com"
                    className="w-full p-2 mt-1 rounded-md border-none outline-none bg-background text-foreground"
                    autoComplete="email"
                    required
                    ref={emailRef}
                />
            </label>
            <label htmlFor="message" className="noCustomCursor w-full h-fit flex justify-center items-start flex-col px-1 py-2">
                Message
                <textarea
                    rows={5}
                    id="message"
                    name="message"
                    placeholder="Enter your Message"
                    className="w-full p-2 mt-1 rounded-md border-none outline-none bg-background text-foreground resize-none"
                    required
                    ref={messageRef}
                />
            </label>

            <div className="w-full flex justify-start items-center gap-4">
                <button
                    className="flex_center gap-4 border-none bg-background text-foreground outline outline-white/20 my-1 mx-2 py-2 px-6 lg:px-20 rounded-md"
                    type="submit"
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <>
                            <span>Sending</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-loader-2 animate-spin"><path d="M21 12a9 9 0 1 1-6.219-8.56" /></svg>
                        </>
                    ) : (
                        <>
                            <span>Submit</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send-horizontal"><path d="m3 3 3 9-3 9 19-9Z" /><path d="M6 12h16" /></svg>
                        </>
                    )}
                </button>
                <span>{mailStatus.message}</span>
            </div>
        </form>
    );
};

export default ContactForm;
