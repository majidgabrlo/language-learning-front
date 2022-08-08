import { gql } from "@apollo/client";
import { Button, notification, Select } from "antd";
import { useState } from "react";
import { useAppDispatch } from "../store/hooks";
import { setAppLanguage } from "../store/language/languageAction";
import {
  useLanguagesListQuery,
  useUsersLanguagesQuery,
  useAddLanguageMutation,
} from "./__generated__/AddLanguagePage";

function AddLanguagePage() {
  const { data: userLanguages, refetch: refetchUserLanguages } =
    useUsersLanguagesQuery();
  const dispatch = useAppDispatch();
  const { data, refetch } = useLanguagesListQuery();
  const [addLanguage] = useAddLanguageMutation();
  const [selectedLang, setSelectedLang] = useState("");

  const submitLang = () => {
    addLanguage({
      variables: {
        languageShortName: selectedLang,
        name:
          data?.languagesList.find((lang) => lang.shortName === selectedLang)
            ?.name || "",
      },
    })
      .then(() => {
        notification["success"]({
          message: "Successful",
          description: `${
            data?.languagesList.find((lang) => lang.shortName === selectedLang)
              ?.name
          } successfuly added.`,
        });
      })
      .then(() => {
        refetchUserLanguages();
        refetch();
      });
  };

  const unselectedLanguages = data?.languagesList
    .map((lang) => {
      const shortNames =
        userLanguages?.languageList.map((item) => item.shortName) || [];
      if (!shortNames.includes(lang.shortName)) return lang;
    })
    .filter((item) => item);

  const filteredUserLanguages = data?.languagesList
    .map((lang) => {
      const shortNames =
        userLanguages?.languageList.map((item) => item.shortName) || [];
      if (shortNames.includes(lang.shortName)) return lang;
    })
    .filter((item) => item);

  return (
    <div className="flex mt-28 justify-center">
      <div>
        <div className="font-semibold text-3xl mb-5">Add new Language</div>
        <Select
          className="w-full"
          onChange={(val) => {
            setSelectedLang(val);
          }}
        >
          {unselectedLanguages?.map((lang) => {
            if (lang)
              return (
                <Select.Option key={lang.name} value={lang.shortName}>
                  <div className="flex gap-x-5">
                    <img
                      className="w-8 h-6 my-auto rounded"
                      alt={lang.shortName}
                      src={lang.flagUrl}
                    />
                    <div>{lang.name}</div>
                  </div>
                </Select.Option>
              );
          })}
        </Select>
        <Button
          block
          className="mt-3 !bg-indigo-600 hover:!bg-indigo-800 !text-white !rounded-lg"
          disabled={!selectedLang}
          onClick={submitLang}
        >
          Add
        </Button>
        <div className="mt-24">
          <div className="font-semibold text-3xl mb-5">
            Already Selected Languages
          </div>
          {!!filteredUserLanguages?.length && (
            <div className="bg-slate-50 px-1 py-1 rounded shadow">
              {filteredUserLanguages?.map((lang) => {
                if (lang)
                  return (
                    <div
                      key={lang.shortName}
                      onClick={() => {
                        dispatch(setAppLanguage(lang.shortName));
                      }}
                      className="flex gap-x-5 my-3 cursor-pointer bg-indigo-700 px-2 py-2 rounded text-white hover:bg-indigo-900"
                    >
                      <img
                        className="w-8 h-6 my-auto rounded"
                        alt={lang.shortName}
                        src={lang.flagUrl}
                      />
                      <div>{lang.name}</div>
                    </div>
                  );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
gql`
  query LanguagesList {
    languagesList {
      flagUrl
      name
      shortName
    }
  }
`;

gql`
  query UsersLanguages {
    languageList {
      id
      name
      shortName
    }
  }
`;

gql`
  mutation AddLanguage($name: String!, $languageShortName: String!) {
    addLanguage(name: $name, languageShortName: $languageShortName)
  }
`;
export default AddLanguagePage;
