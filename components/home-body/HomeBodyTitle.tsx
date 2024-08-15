import useSearchParamState from "@/lib/useSearchParamState";

const HomeBodyTitle: React.FC = () => {
  const [contentType] = useSearchParamState("content_type");
  const [readTime] = useSearchParamState("read_time");

  let titleText = `Хто я`;

  switch (contentType) {
    case "0":
      titleText = "Моє CV";
      break;
    case "1":
      titleText = "Мої Проекти";
      break;
    case "2":
      titleText = "Мій Професійний Досвід";
      break;
    case "3":
      titleText = "Про Кар'єру, Власні Проекти і навчання";
      break;
    default:
      titleText = "Про мене";
  }

  /*
  Лак-1. Проф

одрразу CV

текст “Моє CV:”

Лак-10. Проф

детальний опис всіх проектів

“Мої проекти і професійний досвід”

Лак-1. Особ.

Моя коротка біографія і хоббі (звідки я і чим цікавлюсь, пара фоток)

Моя філософія

“Про мене”

Лак-10. Особ.

Моя біографія розбита по главам життя

Моя особиста філософія

“Моя біографія за 10хв.”
  */

  return (
    <p className="mb-20 text-xl font-semibold tracking-tight scroll-m-20 lg:text-xl">
      {titleText}
    </p>
  );
};

export default HomeBodyTitle;
