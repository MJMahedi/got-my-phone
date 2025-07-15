import { useState } from "react";
import { phoneData } from "./data";
import NoticeBanner from "./components/NoticeBanner";

function App() {
  const [query, setQuery] = useState("");

  const filtered = phoneData.filter(p =>
    p.imei.toLowerCase().includes(query.toLowerCase()) ||
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <NoticeBanner />
      <h1 className="text-3xl font-bold text-center mb-8">Lost Phone IMEI Checker</h1>
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Enter IMEI number..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border border-gray-400 rounded-lg px-4 py-2 w-full max-w-md"
        />
      </div>
      <div>
        <h1>
          গত ১০/০৭/২০২৫খ্রিঃ তারিখ সিএমপি'র ডিবি (পশ্চিম)  কর্তৃক বিশেষ অভিযানে ৩৪২ টি বিভিন্ন মডেলের ব্যবহৃত মোবাইল উদ্ধার করে।
          ডিবি (পশ্চিম) কর্তৃক উদ্ধারকৃত চোরাই মোবাইল ফোনের লিস্টে আপনার চুরি, ছিনতাই বা হারিয়ে যাওয়া ফোনটি খোঁজে পেতে নিম্ন সংযুক্ত IMEI নাম্বার দেখে মিলিয়ে নিন।
          এই সংক্রান্তে প্রয়োজনে নিম্নবর্ণিত উদ্ধারকারী কর্মকর্তার সাথে যোগাযোগের অনুরোধ করা হলো।
          মোঃ রবিউল ইসলাম,
          এসআই (নি.), ডিবি (পশ্চিম),
          সিএমপি, চট্টগ্রাম, মোবাইল- 01740-855309
        </h1>
      </div>
      <div className="overflow-x-auto">
        <table className="table-auto w-full bg-white border border-gray-200 rounded">
          <thead className="bg-gray-300 text-gray-800">
            <tr>
              <th className="p-2 border">Serial</th>
              <th className="p-2 border">Phone Brand</th>
              <th className="p-2 border">IMEI Number</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length > 0 ? (
              filtered.map((item, index) => (
                <tr key={item.id} className="text-center border-t">
                  <td className="p-2 border">{item.id}</td>
                  <td className="p-2 border">{item.name}</td>
                  <td className="p-2 border">{item.imei}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center p-4 text-gray-500">
                  No matching IMEI found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;