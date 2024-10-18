import { BottomSheet } from '@alfalab/core-components/bottom-sheet';
import { ButtonMobile } from '@alfalab/core-components/button/mobile';
import { Gap } from '@alfalab/core-components/gap';
import { Typography } from '@alfalab/core-components/typography';
import { useState } from 'react';
import { Tooltip } from 'react-tooltip';
import aLogo from './assets/a_logo.png';
import cfa from './assets/cfa.png';
import du from './assets/du.png';
import funds from './assets/funds.png';
import iis from './assets/iis.png';
import isz from './assets/isz.png';
import nsz from './assets/nsz.png';
import potok from './assets/potok.png';
import { appSt } from './style.css';
import { useCopyToClipboard } from './useCopyToClipboard';

export const App = () => {
  const [openBs, setOpenBs] = useState(false);
  const [selectedItem, setSelected] = useState<'isz' | 'nsz'>('isz');
  const { copiedText, copy } = useCopyToClipboard();

  return (
    <>
      <div className={appSt.container}>
        <Typography.TitleResponsive style={{ marginTop: '1rem' }} tag="h1" view="medium" font="system" weight="semibold">
          Внебиржевые инвестиции
        </Typography.TitleResponsive>

        <div className={appSt.grid}>
          <a
            className={appSt.gridItem}
            href="https://investor.potok.digital/"
            onClick={() => window.gtag('event', 'Alfapotok_3531_9')}
          >
            <div>
              <Typography.Text view="primary-medium" tag="p" defaultMargins={false} weight="medium">
                АльфаПоток
              </Typography.Text>

              <Typography.Text view="primary-small" tag="p" defaultMargins={false} color="secondary">
                Что это такое
              </Typography.Text>
            </div>
            <img width={48} height={48} src={potok} />
          </a>

          <div
            className={appSt.gridItem}
            onClick={() => {
              window.gtag('event', 'ISG_9');
              setSelected('isz');
              setOpenBs(true);
            }}
          >
            <div>
              <Typography.Text view="primary-medium" tag="p" defaultMargins={false} weight="medium">
                ИСЖ
              </Typography.Text>

              <Typography.Text view="primary-small" tag="p" defaultMargins={false} color="secondary">
                Что это такое
              </Typography.Text>
            </div>
            <img width={48} height={48} src={isz} />
          </div>

          <div
            onClick={() => {
              window.gtag('event', 'NSG_9');
              setSelected('nsz');
              setOpenBs(true);
            }}
            className={appSt.gridItem}
          >
            <div>
              <Typography.Text view="primary-medium" tag="p" defaultMargins={false} weight="medium">
                НСЖ
              </Typography.Text>

              <Typography.Text view="primary-small" tag="p" defaultMargins={false} color="secondary">
                Что это такое
              </Typography.Text>
            </div>
            <img width={48} height={48} src={nsz} />
          </div>

          <a
            className={appSt.gridItem}
            href="https://alfa-mobile.alfabank.ru/mobile/goto/dfa"
            onClick={() => window.gtag('event', 'DFA_9')}
          >
            <div>
              <Typography.Text view="primary-medium" tag="p" defaultMargins={false} weight="medium">
                ЦФА
              </Typography.Text>

              <Typography.Text view="primary-small" tag="p" defaultMargins={false} color="secondary">
                Что это такое
              </Typography.Text>
            </div>
            <img width={48} height={48} src={cfa} />
          </a>
          <a
            className={appSt.gridItem}
            href="alfabank://investments/catalogue?tab=MUTUALu"
            onClick={() => window.gtag('event', 'Fonds_9')}
          >
            <div>
              <Typography.Text view="primary-medium" tag="p" defaultMargins={false} weight="medium">
                Фонды
              </Typography.Text>

              <Typography.Text view="primary-small" tag="p" defaultMargins={false} color="secondary">
                Что это такое
              </Typography.Text>
            </div>
            <img width={48} height={48} src={funds} />
          </a>
          <a
            className={appSt.gridItem}
            href="alfabank://investments/catalogue?tab=TRUST"
            onClick={() => window.gtag('event', 'DU_9')}
          >
            <div>
              <Typography.Text view="primary-medium" tag="p" defaultMargins={false} weight="medium">
                ДУ
              </Typography.Text>

              <Typography.Text view="primary-small" tag="p" defaultMargins={false} color="secondary">
                Что это такое
              </Typography.Text>
            </div>
            <img width={48} height={48} src={du} />
          </a>
          <a
            className={appSt.gridItem}
            style={{ gridColumn: 'span 2' }}
            href="alfabank://investments/catalogue?tab=IIS"
            onClick={() => window.gtag('event', 'IIS_9')}
          >
            <div>
              <Typography.Text view="primary-medium" tag="p" defaultMargins={false} weight="medium">
                ИИС
              </Typography.Text>

              <Typography.Text view="primary-small" tag="p" defaultMargins={false} color="secondary">
                Что это такое
              </Typography.Text>
            </div>
            <img width={48} height={48} src={iis} />
          </a>
        </div>
      </div>
      <Gap size={96} />

      <div className={appSt.bottomBtn}>
        <ButtonMobile block view="primary" href="alfabank://investments" onClick={() => window.gtag('event', 'Vitrina_9')}>
          Витрина инвестиций
        </ButtonMobile>
      </div>
      <BottomSheet
        stickyHeader
        open={openBs}
        onClose={() => {
          if (selectedItem === 'isz') {
            window.gtag('event', 'ISG_Exit_9');
          } else {
            window.gtag('event', 'NSG_Exit_9');
          }
          setOpenBs(false);
        }}
        hasCloser
        titleAlign="center"
        initialHeight="full"
        actionButton={
          <ButtonMobile
            block
            view="primary"
            href={
              selectedItem
                ? 'https://alfabank.ru/make-money/investments/iszh'
                : 'https://alfabank.ru/make-money/investments/nszh/'
            }
            onClick={() => {
              if (selectedItem === 'isz') {
                window.gtag('event', 'ISG_More_info_9');
              } else {
                window.gtag('event', 'NSG_More_info_9');
              }
            }}
          >
            Подробнее на сайте
          </ButtonMobile>
        }
      >
        <div className={appSt.containerBS}>
          <img src={aLogo} height={168} width="100%" style={{ objectFit: 'contain' }} />
          <Typography.Title tag="h2" view="small" weight="semibold">
            Получить консультацию
          </Typography.Title>
          <Typography.Title tag="h2" view="small" weight="regular">
            Наши специалисты ответят на все вопросы и помогут оформить продукт.
          </Typography.Title>
          <Tooltip isOpen={!!copiedText} anchorSelect="#iads" content="Скопировано" place="top" noArrow />
          <Typography.Title
            id="iads"
            tag="h2"
            view="small"
            weight="regular"
            onClick={() => {
              if (selectedItem === 'isz') {
                window.gtag('event', 'ISG_Mobile_9');
              } else {
                window.gtag('event', 'NSG_Mobile_9');
              }

              copy('+7 495 788-88-78');
            }}
            style={{ textDecoration: 'underline' }}
          >
            +7 495 788-88-78
          </Typography.Title>
        </div>
      </BottomSheet>
    </>
  );
};
