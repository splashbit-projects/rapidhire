import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import Script from "next/script";
import { useCallback, useState } from "react";

const LangSwitcher = () => {
  const locale = useLocale();
  const [currentLang, setCurrentLang] = useState(locale);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = useCallback(
    (newLocale) => {
      const cleanPath = pathname.replace(/^\/[a-zA-Z-]+/, "");
      router.replace(`/${newLocale}${cleanPath}`);
      setCurrentLang(newLocale);
    },
    [pathname, router]
  );

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        style={{
          padding: "0",
          backgroundColor: "transparent",
          color: "#fff",
          border: "none",
          borderRadius: "0",
          cursor: "pointer",
        }}
      >
        <img
          src={`/images/${currentLang}.svg`}
          style={{
            width: "28px",
          }}
        />
      </button>

      {isDropdownOpen && (
        <ul
          translate="no"
          style={{
            position: "absolute",
            top: "40px",
            left: "-16px",
            backgroundColor: "#000000D9",
            listStyle: "none",
            padding: "16px",
            margin: 0,
            border: "1px solid #ccc",
            borderRadius: "5px",
            width: "130px",
          }}
        >
          <li
            onClick={() => handleLanguageChange("en")}
            style={{
              padding: "7px 0",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "#fff",
            }}
          >
            <img
              src="/images/EN.svg"
              style={{
                width: "28px",
              }}
            />
            English
          </li>
          <li
            onClick={() => handleLanguageChange("de")}
            style={{
              padding: "7px 0",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "#fff",
            }}
          >
            <img
              src="/images/DE.svg"
              style={{
                width: "28px",
              }}
            />
            German
          </li>
          <li
            onClick={() => handleLanguageChange("it")}
            style={{
              padding: "7px 0",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "#fff",
            }}
          >
            <img
              src="/images/IT.svg"
              style={{
                width: "28px",
              }}
            />
            Italian
          </li>
          <li
            onClick={() => handleLanguageChange("zh")}
            style={{
              padding: "7px 0",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "#fff",
            }}
          >
            <img
              src="/images/zh-CN.svg"
              style={{
                width: "28px",
              }}
            />
            Chinese
          </li>
        </ul>
      )}
    </div>
  );
};

export default LangSwitcher;
