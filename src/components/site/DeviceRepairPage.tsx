type Issue = { title: string; price: string; time: string };
type Faq = { q: string; a: string };
type Related = { label: string; to: string };

type Props = {
  device: string;
  tagline: string;
  issues: Issue[];
  faqs: Faq[];
  related: Related[];
};

export function DeviceRepairPage({ 
  device, tagline, issues, faqs, related 
}: Props) {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold">{device}</h1>
      <p className="text-gray-600 mt-2">{tagline}</p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Repair Services</h2>
      <div className="grid gap-4">
        {issues.map((issue, i) => (
          <div key={i} className="border rounded-lg p-4">
            <h3 className="font-semibold">{issue.title}</h3>
            <p className="text-sm text-gray-500">
              Price: {issue.price} · Time: {issue.time}
            </p>
          </div>
        ))}
      </div>
      <h2 className="text-2xl font-semibold mt-8 mb-4">FAQs</h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="border rounded-lg p-4">
            <p className="font-medium">{faq.q}</p>
            <p className="text-gray-600 mt-1">{faq.a}</p>
          </div>
        ))}
      </div>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Related</h2>
      <div className="flex gap-3 flex-wrap">
        {related.map((r, i) => (
          <a key={i} href={r.to} 
            className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            {r.label}
          </a>
        ))}
      </div>
    </main>
  );
}

export default DeviceRepairPage;
