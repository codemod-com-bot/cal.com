"use client";
import { useTranslation } from "react-i18next";


import Head from "next/head";

import { APP_NAME, WEBSITE_URL } from "@calcom/lib/constants";
import { Button } from "@calcom/ui";

export default function MaintenancePage() {
const { t } = useTranslation();

  return (
    <div className="bg-subtle flex h-screen">
      <Head>
        <title>{t('under-maintenance-app-name', { APP_NAME })}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-default m-auto rounded-md p-10 text-right ltr:text-left">
        <h1 className="text-emphasis text-2xl font-medium">{t('down-for-maintenance')}</h1>
        <p className="text-default mb-6 mt-4 max-w-2xl text-sm">{t('cal-com-scheduled-maintenance-message')}</p>
        <Button href={`${WEBSITE_URL}/support`}>{t('contact-support')}</Button>
      </div>
    </div>
  );
}
