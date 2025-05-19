import ProtectedRoute from "@/components/ProtectedRoute";

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <main className="p-4">
        <h1 className="text-2xl font-bold">Welcome to the Dashboard</h1>
      </main>
    </ProtectedRoute>
  );
}
