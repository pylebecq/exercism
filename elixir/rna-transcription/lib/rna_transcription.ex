defmodule RnaTranscription do
  @doc """
  Transcribes a character list representing DNA nucleotides to RNA

  ## Examples

  iex> RnaTranscription.to_rna('ACTG')
  'UGAC'
  """
  @spec to_rna([char]) :: [char]
  def to_rna(dna) do
    Enum.map(dna, &to_rna_complement/1)
  end

  defp to_rna_complement(?G), do: ?C
  defp to_rna_complement(?C), do: ?G
  defp to_rna_complement(?T), do: ?A
  defp to_rna_complement(?A), do: ?U
end
