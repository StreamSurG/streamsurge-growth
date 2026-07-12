import RequirementHeader from "../../components/RequirementHeader";
import RequirementForm from "../../components/RequirementForm";
import RequirementSuccess from "../../components/RequirementSuccess";

export default function RequirementsPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">

      <div className="mx-auto max-w-6xl">

        <RequirementHeader />

        <RequirementForm />

        <div className="mt-16">

          <RequirementSuccess />

        </div>

      </div>

    </main>
  );
}