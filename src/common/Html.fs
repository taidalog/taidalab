// taidalab
// https://github.com/taidalog/taidalab
// Copyright (c) 2022-2026 taidalog
// This software is licensed under the MIT License.
// https://github.com/taidalog/taidalab/blob/main/LICENSE
namespace Taidalab

open Browser.Dom
open Browser.Types
open Dom

module Html =
    type HTMLBuilder() =
        inherit ElementBuilder()

        [<CustomOperation("contentEditable")>]
        member _.SetContentEditable(acc: 'T :> HTMLElement, x: bool) : 'T =
            acc.contentEditable <- if x then "yes" else "no"
            acc

        [<CustomOperation("hidden")>]
        member _.SetHidden(acc: 'T :> HTMLElement, x: bool) : 'T =
            acc.hidden <- x
            acc

        [<CustomOperation("innerText")>]
        member _.SetInnetText(acc: 'T :> HTMLElement, x: string) : 'T =
            acc.innerText <- x
            acc

        [<CustomOperation("title")>]
        member _.SetTitle(acc: 'T :> HTMLElement, x: string) : 'T =
            acc.title <- x
            acc

        [<CustomOperation("translate")>]
        member _.SetTranslate(acc: 'T :> HTMLElement, x: bool) : 'T =
            acc.setAttribute ("translate", if x then "yes" else "no")
            acc

    type AnchorBuilder() =
        inherit HTMLBuilder()

        member _.Yield(_) : HTMLAnchorElement =
            document.createElement "a" :?> HTMLAnchorElement

        member _.Zero() : HTMLAnchorElement =
            document.createElement "a" :?> HTMLAnchorElement

        [<CustomOperation("href")>]
        member _.SetHref(acc: HTMLAnchorElement, x: string) : HTMLAnchorElement =
            acc.href <- x
            acc

        [<CustomOperation("target")>]
        member _.SetTarget(acc: HTMLAnchorElement, x: string) : HTMLAnchorElement =
            acc.target <- x
            acc

        [<CustomOperation("set")>]
        member _.Set(acc: HTMLAnchorElement, href: string, text: string) : HTMLAnchorElement =
            acc.href <- href
            acc.innerText <- text
            acc

    let a: AnchorBuilder = AnchorBuilder()

    type BodyBuilder() =
        inherit HTMLBuilder()

        member _.Yield(_) : HTMLBodyElement =
            document.createElement "body" :?> HTMLBodyElement

        member _.Zero() : HTMLBodyElement =
            document.createElement "body" :?> HTMLBodyElement

    let body: BodyBuilder = BodyBuilder()

    type BRBuilder() =
        inherit HTMLBuilder()

        member _.Zero() : HTMLBRElement =
            document.createElement "br" :?> HTMLBRElement

    let br: BRBuilder = BRBuilder()

    type ButtonBuilder() =
        inherit HTMLBuilder()

        member _.Yield(_) : HTMLButtonElement =
            document.createElement "button" :?> HTMLButtonElement

        member _.Zero() : HTMLButtonElement =
            document.createElement "button" :?> HTMLButtonElement

        [<CustomOperation("type")>]
        member _.SetType(acc: HTMLButtonElement, x: string) : HTMLButtonElement =
            acc.``type`` <- x
            acc

        [<CustomOperation("value")>]
        member _.SetValue(acc: HTMLButtonElement, x: string) : HTMLButtonElement =
            acc.value <- x
            acc

    let button: ButtonBuilder = ButtonBuilder()

    type DivBuilder() =
        inherit HTMLBuilder()

        member _.Yield(_) : HTMLDivElement =
            document.createElement "div" :?> HTMLDivElement

        member _.Zero() : HTMLDivElement =
            document.createElement "div" :?> HTMLDivElement

    let div: DivBuilder = DivBuilder()

    type DetailsBuilder() =
        inherit HTMLBuilder()
        member _.Yield(_) : HTMLElement = document.createElement "details"
        member _.Zero() : HTMLElement = document.createElement "details"

    let details: DetailsBuilder = DetailsBuilder()

    type FooterBuilder() =
        inherit HTMLBuilder()
        member _.Yield(_) : HTMLElement = document.createElement "footer"
        member _.Zero() : HTMLElement = document.createElement "footer"

    let footer: FooterBuilder = FooterBuilder()

    type FormBuilder() =
        inherit HTMLBuilder()

        member _.Yield(_) : HTMLFormElement =
            document.createElement "form" :?> HTMLFormElement

        member _.Zero() : HTMLFormElement =
            document.createElement "form" :?> HTMLFormElement

        [<CustomOperation("autocomplete")>]
        member _.SetAutocomplete(acc: HTMLFormElement, x: bool) : HTMLFormElement =
            acc.autocomplete <- if x then "yes" else "no"
            acc

    let form: FormBuilder = FormBuilder()

    type H1Builder() =
        inherit HTMLBuilder()
        member _.Yield(_) : HTMLElement = document.createElement "h1"
        member _.Zero() : HTMLElement = document.createElement "h1"

    let h1: H1Builder = H1Builder()

    type H2Builder() =
        inherit HTMLBuilder()
        member _.Yield(_) : HTMLElement = document.createElement "h2"
        member _.Zero() : HTMLElement = document.createElement "h2"

    let h2: H2Builder = H2Builder()

    type H3Builder() =
        inherit HTMLBuilder()
        member _.Yield(_) : HTMLElement = document.createElement "h3"
        member _.Zero() : HTMLElement = document.createElement "h3"

    let h3: H3Builder = H3Builder()

    type HeaderBuilder() =
        inherit HTMLBuilder()
        member _.Yield(_) : HTMLElement = document.createElement "header"
        member _.Zero() : HTMLElement = document.createElement "header"

    let header: HeaderBuilder = HeaderBuilder()

    type InputBuilder() =
        inherit HTMLBuilder()

        member _.Yield(_) : HTMLInputElement =
            document.createElement "input" :?> HTMLInputElement

        member _.Zero() : HTMLInputElement =
            document.createElement "input" :?> HTMLInputElement

        [<CustomOperation("type")>]
        member _.SetType(acc: HTMLInputElement, x: string) : HTMLInputElement =
            acc.``type`` <- x
            acc

    let input: InputBuilder = InputBuilder()

    type LIBuilder() =
        inherit HTMLBuilder()

        member _.Yield(_) : HTMLLIElement =
            document.createElement "li" :?> HTMLLIElement

        member _.Zero() : HTMLLIElement =
            document.createElement "li" :?> HTMLLIElement

    let li: LIBuilder = LIBuilder()

    type MainBuilder() =
        inherit HTMLBuilder()
        member _.Yield(_) : HTMLElement = document.createElement "main"
        member _.Zero() : HTMLElement = document.createElement "main"

    let main: MainBuilder = MainBuilder()

    type NavBuilder() =
        inherit HTMLBuilder()
        member _.Yield(_) : HTMLElement = document.createElement "nav"
        member _.Zero() : HTMLElement = document.createElement "nav"

    let nav: NavBuilder = NavBuilder()

    type OListBuilder() =
        inherit HTMLBuilder()

        member _.Yield(_) : HTMLOListElement =
            document.createElement "ol" :?> HTMLOListElement

        member _.Zero() : HTMLOListElement =
            document.createElement "ol" :?> HTMLOListElement

        [<CustomOperation("start")>]
        member _.SetValue(acc: HTMLOListElement, x: int) : HTMLOListElement =
            acc.start <- x
            acc

        [<CustomOperation("type")>]
        member _.SetType(acc: HTMLOListElement, x: string) : HTMLOListElement =
            acc.``type`` <- x
            acc

    let ol: OListBuilder = OListBuilder()

    type ParagraphBuilder() =
        inherit HTMLBuilder()

        member _.Yield(_) : HTMLParagraphElement =
            document.createElement "p" :?> HTMLParagraphElement

        member _.Zero() : HTMLParagraphElement =
            document.createElement "p" :?> HTMLParagraphElement

    let p: ParagraphBuilder = ParagraphBuilder()

    type SectionBuilder() =
        inherit HTMLBuilder()
        member _.Yield(_) = document.createElement "section"
        member _.Zero() = document.createElement "section"

    let section: SectionBuilder = SectionBuilder()

    type SmallBuilder() =
        inherit HTMLBuilder()
        member _.Yield(_) = document.createElement "small"
        member _.Zero() = document.createElement "small"

    let small: SmallBuilder = SmallBuilder()

    type SpanBuilder() =
        inherit HTMLBuilder()

        member _.Yield(_) : HTMLSpanElement =
            document.createElement "span" :?> HTMLSpanElement

        member _.Zero() : HTMLSpanElement =
            document.createElement "span" :?> HTMLSpanElement

    let span: SpanBuilder = SpanBuilder()

    type SubBuilder() =
        inherit HTMLBuilder()
        member _.Yield(_) : HTMLElement = document.createElement "sub"
        member _.Zero() : HTMLElement = document.createElement "sub"

    let sub: SubBuilder = SubBuilder()

    type SummaryBuilder() =
        inherit HTMLBuilder()
        member _.Yield(_) : HTMLElement = document.createElement "summary"
        member _.Zero() : HTMLElement = document.createElement "summary"

    let summary: SummaryBuilder = SummaryBuilder()

    type SupBuilder() =
        inherit HTMLBuilder()
        member _.Yield(_) : HTMLElement = document.createElement "sup"
        member _.Zero() : HTMLElement = document.createElement "sup"

    let sup: SupBuilder = SupBuilder()

    type TextAreaBuilder() =
        inherit HTMLBuilder()

        member _.Yield(_) : HTMLTextAreaElement =
            document.createElement "textarea" :?> HTMLTextAreaElement

        member _.Zero() : HTMLTextAreaElement =
            document.createElement "textarea" :?> HTMLTextAreaElement

    let textArea: TextAreaBuilder = TextAreaBuilder()

    type UListBuilder() =
        inherit HTMLBuilder()

        member _.Yield(_) : HTMLUListElement =
            document.createElement "ul" :?> HTMLUListElement

        member _.Zero() : HTMLUListElement =
            document.createElement "ul" :?> HTMLUListElement

    let ul: UListBuilder = UListBuilder()
