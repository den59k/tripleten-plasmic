// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mFK62F3op98dvDe8VXezui
// Component: wXSwbakE6jQ4

import * as React from "react";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import AppHeader from "/src/components/AppHeader/AppHeader"; // plasmic-import: nwziLnqXxLEw/codeComponent
import Button from "../../Button"; // plasmic-import: FNNn4HRF1uTs/component
import Table from "/src/components/Table/Table"; // plasmic-import: uoGyaDZ5cXdF/codeComponent
import AppFooter from "/src/components/AppFooter/AppFooter"; // plasmic-import: rp8MXVy3o0fv/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: mFK62F3op98dvDe8VXezui/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: wXSwbakE6jQ4/css

import CircleIcon from "./icons/PlasmicIcon__Circle"; // plasmic-import: ekxqDMM-fyMV/icon
import ChevronDownIcon from "./icons/PlasmicIcon__ChevronDown"; // plasmic-import: hcDH4ucVHG-0/icon

createPlasmicElementProxy;

export type PlasmicHomepage__VariantMembers = {};
export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: Flex__<"div">;
  appHeader?: Flex__<typeof AppHeader>;
  button?: Flex__<typeof Button>;
  h1?: Flex__<"h1">;
  link?: Flex__<"a">;
  table?: Flex__<typeof Table>;
  appFooter?: Flex__<typeof AppFooter>;
};

export interface DefaultHomepageProps {
  className?: string;
}

const $$ = {};

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <AppHeader
            data-plasmic-name={"appHeader"}
            data-plasmic-override={overrides.appHeader}
            className={classNames("__wab_instance", sty.appHeader)}
            headerType={"landingPage"}
          >
            <Button
              data-plasmic-name={"button"}
              data-plasmic-override={overrides.button}
              className={classNames("__wab_instance", sty.button)}
              color={"neutral"}
              label={
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__fGqop
                  )}
                >
                  {"Book a Call"}
                </div>
              }
            />
          </AppHeader>
          <h1
            data-plasmic-name={"h1"}
            data-plasmic-override={overrides.h1}
            className={classNames(
              projectcss.all,
              projectcss.h1,
              projectcss.__wab_text,
              sty.h1
            )}
          >
            {"TripleTen Academic Catalogs"}
          </h1>
          <h2
            className={classNames(
              projectcss.all,
              projectcss.h2,
              projectcss.__wab_text,
              sty.h2__yp7S1
            )}
          >
            {"Institutional Mission and Objectives"}
          </h2>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__vil5H
            )}
          >
            <React.Fragment>
              <React.Fragment>{""}</React.Fragment>
              {
                <li
                  className={classNames(
                    projectcss.all,
                    projectcss.li,
                    projectcss.__wab_text,
                    sty.li__y5Kpv
                  )}
                >
                  {
                    "Our mission is to create and develop leading bootcamp programs worldwide for switching careers to tech. We help our students change their lives and build careers with programs that enable beginners from all backgrounds to be successful. We adapt our curriculums to how our students learn, so they can feel fully-supported when making their big leaps.\r\nOur objectives are to:\r"
                  }
                </li>
              }
              <React.Fragment>{""}</React.Fragment>
            </React.Fragment>
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__f2VlY
            )}
          >
            <React.Fragment>
              <React.Fragment>{""}</React.Fragment>
              {
                <ul
                  className={classNames(
                    projectcss.all,
                    projectcss.ul,
                    sty.ul___0VG27
                  )}
                >
                  <li
                    className={classNames(
                      projectcss.all,
                      projectcss.li,
                      projectcss.__wab_text,
                      sty.li__zlFiO
                    )}
                  >
                    {
                      "Focus on employment from day one. Getting a job is the entire point of attending a TripleTen bootcamp. We focus on career and job search readiness, enabling our students to present themselves as tech professionals upon completion of our programs.\r"
                    }
                  </li>
                  <li
                    className={classNames(
                      projectcss.all,
                      projectcss.li,
                      projectcss.__wab_text,
                      sty.li__zd8J
                    )}
                  >
                    {
                      "Provide more support to drive better outcomes. We deliver personalized support. Every student receives the guidance, tutoring, and career coaching needed to reach their goals.\r"
                    }
                  </li>
                  <li
                    className={classNames(
                      projectcss.all,
                      projectcss.li,
                      projectcss.__wab_text,
                      sty.li__g6M41
                    )}
                  >
                    {
                      "Meet our students where they are. We don\u2019t ask our students to put their lives on hold, offering programs that take 20 hours instead of 60+. We also offer flexible terms and timing to make our bootcamps work with our students' lives."
                    }
                  </li>
                </ul>
              }
              <React.Fragment>{""}</React.Fragment>
            </React.Fragment>
          </div>
          <h2
            className={classNames(
              projectcss.all,
              projectcss.h2,
              projectcss.__wab_text,
              sty.h2___8MRN
            )}
          >
            {"Instructional Location"}
          </h2>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___0Bxlo
            )}
          >
            <React.Fragment>
              <React.Fragment>
                {
                  "Instruction is provided online through asynchronous instruction. Students can log in via "
                }
              </React.Fragment>
              {
                <PlasmicLink__
                  data-plasmic-name={"link"}
                  data-plasmic-override={overrides.link}
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    projectcss.plasmic_default__inline,
                    sty.link
                  )}
                  href={"https://tripleten.com/sso/auth"}
                  platform={"react"}
                >
                  {"https://tripleten.com/sso/auth"}
                </PlasmicLink__>
              }
              <React.Fragment>
                {
                  ". Students are expected to have access to a computer meeting the following minimum requirements:\r\n"
                }
              </React.Fragment>
              <span
                className={"plasmic_default__all plasmic_default__span"}
                style={{ fontWeight: 700 }}
              >
                {"Processor (CPU):"}
              </span>
              <React.Fragment>
                {
                  "\r\nIntel Core i5 or i7 / AMD Ryzen 5 or 7 / Apple M1 or M2\r\n"
                }
              </React.Fragment>
              <span
                className={"plasmic_default__all plasmic_default__span"}
                style={{ fontWeight: 700 }}
              >
                {"Memory (RAM):"}
              </span>
              <React.Fragment>
                {"\r\n8GB minimum, 16GB recommended\r\n"}
              </React.Fragment>
              <span
                className={"plasmic_default__all plasmic_default__span"}
                style={{ fontWeight: 700 }}
              >
                {"Storage:"}
              </span>
              <React.Fragment>
                {"\r\n256GB SSD and 20GB of free space minimum\r\n"}
              </React.Fragment>
              <span
                className={"plasmic_default__all plasmic_default__span"}
                style={{ fontWeight: 700 }}
              >
                {"Operating system (OS):"}
              </span>
              <React.Fragment>
                {
                  "\r\nWindows 10 or newer, macOS 11 (Big Sur) or newer, or a Linux distribution\r\nA computer with the above parameters met will be able to access and interact with webpages required for instruction, with a sufficiently up-to-date browser such as Firefox, Google Chrome, Safari, or Opera."
                }
              </React.Fragment>
            </React.Fragment>
          </div>
          <h2
            className={classNames(
              projectcss.all,
              projectcss.h2,
              projectcss.__wab_text,
              sty.h2__tdaIh
            )}
          >
            {"Language of Instruction & Required Proficiency\r"}
          </h2>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__pxDei
            )}
          >
            {
              "All courses are taught in English. Students must be proficient in spoken and written English. English proficiency will be determined based on a third-party assessment and may be requested as a result of interactions with TripleTen student experience or Career Acceleration team. We define English proficiency as B2 level based on Common European Framework of Reference (CEFR).\r"
            }
          </div>
          <h2
            className={classNames(
              projectcss.all,
              projectcss.h2,
              projectcss.__wab_text,
              sty.h2__cdlm0
            )}
          >
            {
              "Accreditation Status, Academic Credit, & Federal or State Financial Aid"
            }
          </h2>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__elFxa
            )}
          >
            {
              "This institution is not accredited by an accrediting agency recognized by the United States Department of Education. This institution does not participate in any federal or state financial aid programs, and a student enrolled in an unaccredited institution is not eligible for federal financial aid. TripleTen does not confer formal degrees; a Certificate is not a formal degree. Further, you will not receive academic credit for your completion of a program; certificate will not entitle you to academic credit recognized by any other institution.\r"
            }
          </div>
          <h2
            className={classNames(
              projectcss.all,
              projectcss.h2,
              projectcss.__wab_text,
              sty.h2__hWD4
            )}
          >
            {"Student Conduct"}
          </h2>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__oaBqq
            )}
          >
            {
              "We value the integrity of TripleTen community. The TripleTen administration sets standards at its discretion to protect the community. Students agree to comply with the Code of Conduct. In addition, students agree not to use the TripleTen Service to:\r"
            }
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__ypvMb
            )}
          >
            <React.Fragment>
              <React.Fragment>{""}</React.Fragment>
              {
                <ul
                  className={classNames(
                    projectcss.all,
                    projectcss.ul,
                    sty.ul__qReQd
                  )}
                >
                  <li
                    className={classNames(
                      projectcss.all,
                      projectcss.li,
                      projectcss.__wab_text,
                      sty.li___12SEl
                    )}
                  >
                    {
                      "Violate any local, state, national or international law or regulation;"
                    }
                  </li>
                  <li
                    className={classNames(
                      projectcss.all,
                      projectcss.li,
                      projectcss.__wab_text,
                      sty.li__wfhTa
                    )}
                  >
                    {
                      "\r\nTransmit any material that is abusive, harassing, tortious, defamatory, vulgar, pornographic, obscene, libelous, invasive of another's privacy, hateful or racially, ethnically, or otherwise objectionable;"
                    }
                  </li>
                  <li
                    className={classNames(
                      projectcss.all,
                      projectcss.li,
                      projectcss.__wab_text,
                      sty.li__ljQ6M
                    )}
                  >
                    {"\r\nStalk, harass, bully, or harm another individual;\r"}
                  </li>
                  <li
                    className={classNames(
                      projectcss.all,
                      projectcss.li,
                      projectcss.__wab_text,
                      sty.li__ff9YL
                    )}
                  >
                    {
                      "Transmit any unsolicited or unauthorized advertising, promotional materials, junk mail, spam, chain letters, pyramid schemes, or any other form of solicitation;"
                    }
                  </li>
                  <li
                    className={classNames(
                      projectcss.all,
                      projectcss.li,
                      projectcss.__wab_text,
                      sty.li__o8NlB
                    )}
                  >
                    {
                      "\r\nKnowingly transmit any material that contains adware, malware, spyware, software viruses or any other computer code, files or programs designed to interrupt, destroy or limit the functionality of any computer software or hardware or telecommunications equipment;\r"
                    }
                  </li>
                  <li
                    className={classNames(
                      projectcss.all,
                      projectcss.li,
                      projectcss.__wab_text,
                      sty.li__imJoe
                    )}
                  >
                    {
                      "Defeat or interfere with any security feature of the TripleTen Service, or attempt to do so;"
                    }
                  </li>
                  <li
                    className={classNames(
                      projectcss.all,
                      projectcss.li,
                      projectcss.__wab_text,
                      sty.li__lzgeE
                    )}
                  >
                    {
                      "\r\nImpersonate any person or entity, or otherwise misrepresent your affiliation with a person or entity;"
                    }
                  </li>
                  <li
                    className={classNames(
                      projectcss.all,
                      projectcss.li,
                      projectcss.__wab_text,
                      sty.li__gjcRx
                    )}
                  >
                    {
                      "\r\nInterfere with or disrupt the TripleTen Service or servers or networks connected to the TripleTen Service, or disobey any requirements, procedures, policies, or regulations of networks connected to the TripleTen Service; "
                    }
                  </li>
                  <li
                    className={classNames(
                      projectcss.all,
                      projectcss.li,
                      projectcss.__wab_text,
                      sty.li__qxJx
                    )}
                  >
                    {
                      "Alter or modify any content or component of the TripleTen Service, other than your User Content.\r"
                    }
                  </li>
                </ul>
              }
              <React.Fragment>{""}</React.Fragment>
            </React.Fragment>
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__gf6F2
            )}
          >
            {
              "Students also agree not to use or launch any automated system, including, without limitation, \u201crobots,\u201d \u201cspiders,\u201d \u201coffline readers\u201d or the like, that access the TripleTen Service.\r\nStudents who have violated the Code of Conduct or the above mentioned agreements my be suspended from the Program and/or you may receive a warning from TripleTen describing the nature of a given concern according to the provisions of the Terms of Use.\r"
            }
          </div>
          <h2
            className={classNames(
              projectcss.all,
              projectcss.h2,
              projectcss.__wab_text,
              sty.h2___8Thh6
            )}
          >
            {"Nondiscrimination Policy"}
          </h2>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__fJOmw
            )}
          >
            {
              "This institution is committed to providing equal opportunities to all applicants to programs and to all applicants for employment. Therefore, no discrimination shall occur in any program or activity of this institution, including activities related to the solicitation of students or employees on the basis of race, color, religion, religious beliefs, national origin, sex, sexual orientation, marital status, pregnancy, age, disability, veteran\u2019s status, or any other classification that precludes a person from consideration as an individual."
            }
          </div>
          <h2
            className={classNames(
              projectcss.all,
              projectcss.h2,
              projectcss.__wab_text,
              sty.h2__dDyJ0
            )}
          >
            {"Charges: Tuition & Fees\r"}
          </h2>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___4AAoQ
            )}
          >
            {"All fees are subject to change without notice."}
          </div>
          <Table
            data-plasmic-name={"table"}
            data-plasmic-override={overrides.table}
            className={classNames("__wab_instance", sty.table)}
            columns={(() => {
              const __composite = [
                { name: null },
                { name: null },
                { name: null },
                { name: null },
                { name: null },
                { name: null },
                { name: null }
              ];
              __composite["0"]["name"] = ``;
              __composite["1"]["name"] = "Software Engineering";
              __composite["2"]["name"] = "Data Science";
              __composite["3"]["name"] = "QA Engineering";
              __composite["4"]["name"] = "BI Analytics";
              __composite["5"]["name"] = "Cybersecurity Analyst";
              __composite["6"]["name"] = "UX/UI Design";
              return __composite;
            })()}
            data={[
              [
                "Standard Tuition",
                "$14,570",
                "$14,570",
                "$7,410",
                "$9,040",
                "$14,570",
                "$8,200"
              ],
              ["Payment options:", "", "", "", "", "", ""],
              [
                "Payment upon Enrollment (discount, 100% charged upfront)",
                "$11,350",
                "$11,350",
                "$5,750",
                "$7,050",
                "$11,350",
                "$6,450"
              ],
              [
                "TripleTen Installments",
                "Choice of:",
                "Choice of:",
                "Choice of:",
                "Choice of:",
                "Choice of:",
                "Choice of:"
              ],
              [
                "",
                "$700 upfront deposit and 3x $3,920 ($12,460 in total)",
                "$700 upfront deposit and 3x $3,920 ($12,460 in total)",
                "$450 upfront deposit and 3x $1,895 ($6,135 in total)",
                "$500 upfront deposit and 3x $2,325 ($7,475 in total)",
                "$700 upfront deposit and 3x $3,920 ($12,460 in total)",
                "$500 upfront deposit and 3x $2,125 ($6,875 in total)"
              ],
              [
                "",
                "$770 upfront deposit and 5x $2,440 ($12,970 in total)",
                "$770 upfront deposit and 5x $2,440 ($12,970 in total)",
                "$490 upfront deposit 5x $1,165 ($6,315 in total)",
                "$550 upfront deposit and 5x $1,440 ($7,750 in total)",
                "$770 upfront deposit and 5x $2,440 ($12,970 in total)",
                "$550 upfront deposit and 5x $1,315 ($7,125 in total)"
              ],
              [
                "",
                "$820 upfront deposit and 9x $1,395 ($13,375 in total)",
                "$820 upfront deposit and 9x $1,395 ($13,375 in total)",
                "$820 upfront deposit and 9x $695 ($6,785 in total)",
                "$590 upfront deposit and 9x $855 ($8,285 in total)",
                "$820 upfront deposit and 9x $1,395 ($13,375 in total)",
                "$590 upfront deposit and 9x $780 ($7,610 in total)"
              ],
              [
                "",
                "$770 upfront deposit and 5x $2,440 ($12,970 in total)",
                "$770 upfront deposit and 5x $2,440 ($12,970 in total)",
                "$490 upfront deposit 5x $1,165 ($6,315 in total)",
                "$550 upfront deposit and 5x $1,440 ($7,750 in total)",
                "$770 upfront deposit and 5x $2,440 ($12,970 in total)",
                "$550 upfront deposit and 5x $1,315 ($7,125 in total)"
              ],
              [
                "",
                "$770 upfront deposit and 5x $2,440 ($12,970 in total)",
                "$770 upfront deposit and 5x $2,440 ($12,970 in total)",
                "$490 upfront deposit 5x $1,165 ($6,315 in total)",
                "$550 upfront deposit and 5x $1,440 ($7,750 in total)",
                "$770 upfront deposit and 5x $2,440 ($12,970 in total)",
                "$550 upfront deposit and 5x $1,315 ($7,125 in total)"
              ],
              [
                "",
                "$1,100 upfront deposit and 36x $374 ($14,570 in total)",
                "$1,100 upfront deposit and 36x $374 ($14,570 in total)",
                "",
                "",
                "$$1,100 upfront deposit and 36x $374 ($14,570 in total)",
                ""
              ]
            ]}
          />

          <AppFooter
            data-plasmic-name={"appFooter"}
            data-plasmic-override={overrides.appFooter}
            className={classNames("__wab_instance", sty.appFooter)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "appHeader", "button", "h1", "link", "table", "appFooter"],
  appHeader: ["appHeader", "button"],
  button: ["button"],
  h1: ["h1"],
  link: ["link"],
  table: ["table"],
  appFooter: ["appFooter"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  appHeader: typeof AppHeader;
  button: typeof Button;
  h1: "h1";
  link: "a";
  table: typeof Table;
  appFooter: typeof AppFooter;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomepage__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    appHeader: makeNodeComponent("appHeader"),
    button: makeNodeComponent("button"),
    h1: makeNodeComponent("h1"),
    link: makeNodeComponent("link"),
    table: makeNodeComponent("table"),
    appFooter: makeNodeComponent("appFooter"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
