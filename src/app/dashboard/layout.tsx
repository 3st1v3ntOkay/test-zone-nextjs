import type { Metadata } from "next";
import type { PropsLayout } from "@/models";

export const Metadate: Metadata = {
  title: "Dashboard page",
  description: "This is dashboard page"
}

// Hacer el intento de ver si comentando esta parte sirve esta ruta
export default function DashboardLayout ({
  children
}: PropsLayout) {
  return (
    <main>{children}</main>
  )
}
