export function strIncludes(str: string, query: string, strict?: boolean) {
  return strict
    ? str.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, ""))
    : str
        .toLowerCase()
        .normalize("NFD")
        .replace(/\p{Diacritic}/gu, "")
        .replace(/\s+/g, "")
        .replace(".", "")
        .replace(":", "")
        .includes(query.toLowerCase().replace(/\s+/g, ""))
}
