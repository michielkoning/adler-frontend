export default ({
  fields,
  type,
  id,
  slug,
  page,
  image,
  subjectIds,
  sourceIds,
  include,
  exclude,
  pageSize,
  search,
  parent,
  productCategory,
  date,
  dateBefore,
  dateAfter,
  lang,
}: {
  fields: string[];
  type: string;
  id?: string;
  slug?: string;
  page?: number;
  image?: boolean;
  include?: [number];
  exclude?: string;
  subjectIds?: string;
  sourceIds?: string;
  pageSize?: number;
  search?: string;
  parent?: number;
  productCategory?: string;
  date?: string;
  dateBefore?: string;
  dateAfter?: string;
  lang?: string;
}) => {
  const { apiUrl } = useAppConfig();

  let baseUrl = `${apiUrl}wp/v2/${type}/`;
  if (id) {
    baseUrl = `${baseUrl}${id}`;
  }

  const url = new URL(baseUrl);
  if (image) {
    url.searchParams.set("_embed", "true");
    fields.push("_links");
    fields.push("_embedded");
  }
  const allFields = ["id", ...fields];
  url.searchParams.set("status", "publish");
  url.searchParams.set("_fields", allFields.join(","));
  if (fields.includes("acf")) {
    url.searchParams.set("acf_format", "standard");
  }
  if (slug) {
    url.searchParams.set("slug", slug);
  }
  if (subjectIds) {
    url.searchParams.set("subjects", subjectIds);
  }
  if (sourceIds) {
    url.searchParams.set("sources", sourceIds);
  }
  if (search) {
    url.searchParams.set("search", search);
  }
  if (lang) {
    url.searchParams.set("lang", lang);
  }
  if (parent) {
    url.searchParams.set("parent", parent.toString());
  }
  if (exclude) {
    url.searchParams.set("exclude", exclude);
  }
  if (include) {
    url.searchParams.set("include", include);
  }
  if (page) {
    url.searchParams.set("page", page.toString());
  }
  if (date) {
    url.searchParams.set("date", date);
  }
  if (dateBefore) {
    url.searchParams.set("date_before", dateBefore);
  }
  if (dateAfter) {
    url.searchParams.set("date_after", dateAfter);
  }
  if (pageSize) {
    url.searchParams.set("per_page", pageSize.toString());
  }

  if (productCategory) {
    url.searchParams.set("category", productCategory.toString());
  }
  return url.toString();
};
