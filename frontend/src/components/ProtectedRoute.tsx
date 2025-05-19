// src/components/ProtectedRoute.tsx
"use client";

import { useAuth } from "@/contexts/AuthContext";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { token } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!token) {
      router.replace("/login?redirect=" + pathname);
    }
  }, [token, pathname, router]);

  if (!token) return null;

  return <>{children}</>;
}
