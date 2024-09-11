import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { MagnifyingGlass } from '@phosphor-icons/react';

import { ContentSearch } from './styled';

export const SearchInput = () => {
  const [searchTerm, setSearchTerm] = React.useState<string>("");
  const navigate = useNavigate();
  const location = useLocation();

  const params = React.useMemo(() => new URLSearchParams(location.search), [location.search]);

  const handleSearchChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);

    if (e.target.value) {
      params.set("search", e.target.value)
    } else {
      params.delete("search");
    }

    navigate({ search: params.toString() })
  }, [navigate, params])

  React.useEffect(() => {
    const search = params.get("search") || "";
    setSearchTerm(search);
  }, [params])

  return (
    <ContentSearch>
      <input
        type="search"
        name="assets"
        id="asset"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Buscar Ativo ou Local"
      />
      <MagnifyingGlass size={16} />
    </ContentSearch>
  );
}
