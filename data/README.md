# Takvim etkinlikleri (events.json)

`events.json` dosyasını düzenleyerek Koçluk Okulu sayfasındaki **Kurs ve Webinar Takvimi**ne yeni etkinlik ekleyebilirsiniz. Veritabanı gerekmez.

## Alanlar

| Alan       | Açıklama                          | Örnek     |
|-----------|------------------------------------|-----------|
| id        | Benzersiz kısa ID                  | "7"       |
| date      | Tarih (YYYY-MM-DD)                 | "2026-04-10" |
| timeStart | Başlangıç saati                    | "19:00"   |
| timeEnd   | Bitiş saati                        | "20:30"   |
| titleTr   | Etkinlik adı (Türkçe)              | "Level 1 – Koçluk Temelleri" |
| titleEn   | Etkinlik adı (İngilizce)           | "Level 1 – Coaching Foundation" |
| type      | course / webinar / masterclass     | "webinar" |
| link      | (İsteğe bağlı) Kayıt veya detay URL | ""       |
| image     | (İsteğe bağlı) Görsel yolu, örn. /images/events/xxx.jpg | "" |
| descriptionTr | (İsteğe bağlı) Kısa açıklama (TR) | "" |
| descriptionEn | (İsteğe bağlı) Kısa açıklama (EN) | "" |

## Örnek yeni etkinlik

```json
{
  "id": "7",
  "date": "2026-04-15",
  "timeStart": "14:00",
  "timeEnd": "17:00",
  "titleTr": "Yeni Webinar Başlığı",
  "titleEn": "New Webinar Title",
  "type": "webinar",
  "link": "https://..."
}
```

Dosyayı kaydettikten sonra sayfayı yenilemeniz yeterli (build/deploy sonrası takvim güncellenir).
