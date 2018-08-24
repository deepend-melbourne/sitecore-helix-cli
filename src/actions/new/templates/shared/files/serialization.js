module.exports = (name, layer) => `<configuration xmlns:patch="http://www.sitecore.net/xmlconfig/">
  <sitecore>
    <unicorn>
      <configurations>
        <configuration name="${layer}.${name}" description="${layer} ${name}" extends="Helix.${layer}">
          <predicate>
            <include name="Media Library" database="master" path="/sitecore/media library/${layer}/${name}" />
            <include name="Placeholder Settings" database="master" path="/sitecore/layout/Placeholder Settings/${layer}/${name}" />
            <include name="System Settings" database="master" path="/sitecore/system/Settings/${layer}/${name}" />
          </predicate>
        </configuration>
      </configurations>
    </unicorn>
  </sitecore>
</configuration>
`
