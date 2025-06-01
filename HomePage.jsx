
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-6">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-2">🎮 GameWorld</h1>
        <p className="text-lg text-gray-300">همه چیز درباره‌ی بازی‌ها و روز جهانی بازی</p>
      </header>

      <section className="grid md:grid-cols-2 gap-6 mb-12">
        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">📅 روز جهانی بازی‌ها</h2>
            <p className="text-gray-300 text-sm">
              روز جهانی بازی‌ها هر ساله برای گرامی‌داشت تأثیر بازی‌ها بر فرهنگ، جامعه و آموزش برگزار می‌شود.
              در این بخش درباره تاریخچه و برنامه‌های این روز می‌خوانید.
            </p>
            <Button className="mt-4">بیشتر بخوانید</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">🔥 بازی‌های محبوب</h2>
            <p className="text-gray-300 text-sm">
              معرفی بازی‌های برتر دنیا با نقد، تریلر و لینک دانلود مستقیم یا خرید قانونی از استورهای معتبر.
            </p>
            <Button className="mt-4">مشاهده بازی‌ها</Button>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">🌐 مرورگر داخلی</h2>
        <div className="flex gap-2 mb-2">
          <Input placeholder="آدرس سایت یا کلیدواژه..." className="flex-1" />
          <Button>جستجو</Button>
        </div>
        <iframe
          src="https://ign.com"
          className="w-full h-[500px] border rounded-xl"
          title="Browser"
        ></iframe>
      </section>

      <footer className="text-center text-gray-500 mt-12">
        ساخته‌شده با ❤️ توسط GameWorld | © 2025
      </footer>
    </div>
  );
}
