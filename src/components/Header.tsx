import { Button, PageHeader, Select } from "antd";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { gql } from "@apollo/client";
import { useGetLanguageListQuery } from "./__generated__/Header";
import { setAppLanguage } from "../store/language/languageAction";

function Header() {
  const { data } = useGetLanguageListQuery();
  const { auth, language } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const userLanguages = data?.languagesList
    .map((lang) => {
      const shortNames =
        data.me?.languages?.map((item) => item.shortName) || [];
      if (shortNames.includes(lang.shortName)) return lang;
    })
    .filter((item) => item);

  const changeLanguage = (shortName: string = "") => {
    dispatch(setAppLanguage(shortName));
  };

  return (
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        ghost={false}
        title={
          <img
            src={language.flagUrl}
            className="w-12 rounded"
            alt={language.selectedLanguage}
          />
        }
        subTitle={<div>{language.fullName}</div>}
        extra={[
          <div className="font-bold uppercase">{auth.name}</div>,
          <Select
            value={language.selectedLanguage}
            style={{ width: 150 }}
            onChange={(value) => {
              if (value === "add") {
                changeLanguage();
                localStorage.setItem("selectedLearningLang", "");
                return
              }
              changeLanguage(value);
              localStorage.setItem("selectedLearningLang", value);
            }}
          >
            {userLanguages?.map((item) => (
              <Select.Option value={item?.shortName}>
                <div className="flex gap-x-5">
                  <img
                    className="w-8 h-6 my-auto rounded"
                    alt={item?.shortName}
                    src={item?.flagUrl}
                  />
                  <div>{item?.name}</div>
                </div>
              </Select.Option>
            ))}
            <Select.Option value="add">
              <div className="flex gap-x-5">Add language</div>
            </Select.Option>
          </Select>,
          <Button
            onClick={() => {
              localStorage.setItem("languageToken", "");
              window.location.reload();
            }}
          >
            Sign out
          </Button>,
        ]}
      />
    </div>
  );
}

gql`
  query GetLanguageList {
    me {
      languages {
        shortName
      }
    }
    languagesList {
      shortName
      flagUrl
      name
    }
  }
`;

export default Header;
