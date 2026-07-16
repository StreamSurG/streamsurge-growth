import { Suspense } from "react";

import RequirementHeader from "../../components/RequirementHeader";
import RequirementForm from "../../components/RequirementForm";
import RequirementSuccess from "../../components/RequirementSuccess";

export default function RequirementsPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">

      <div className="mx-auto max-w-6xl">

        <RequirementHeader />

        <Suspense
          fallback={
            <div className="mt-12 rounded-3xl border border-white/10 bg-[#101010] p-10 text-center text-white">
              Loading requirements...
            </div>
          }
        >
          <RequirementForm />
        </Suspense>

        <div className="mt-16">
          <RequirementSuccess />
        </div>

      </div>

    </main>
  );
}