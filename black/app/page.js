import { supabase } from "./supa";
export default function Black() {
    const plp = () => (supabase.from("pluck").insert([{ name: "yan" }]), alert("www"))
    return <h1>jjjjj</h1>
}