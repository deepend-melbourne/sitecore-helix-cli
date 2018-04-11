module.exports = (name, layer) => `using Sitecore.Data;

namespace Sitecore.${layer}.${name}
{
    public static class Templates
    {
    }
}
`
