type Pagination = {
  count: Int;
  limit: Int;
  offset: Int;
  total: Int;
}

type NewsResponse = {
  pagination: Pagination;
  //data: DataEntry[];
}

// category can be any of these strings
type Category = 
  |"general"
  |"business"
  |"entertainment"
  |"health"
  |"science"
  |"sports"
  |"technology"