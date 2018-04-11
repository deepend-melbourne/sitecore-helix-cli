const uuid = require('uuid').v4

module.exports = (name, layer) => {
  const guid = uuid()

  return `<?xml version="1.0" encoding="utf-8"?>
<Project ToolsVersion="12.0" DefaultTargets="Build" xmlns="http://schemas.microsoft.com/developer/msbuild/2003">
  <Import Project="$(MSBuildExtensionsPath)\\$(MSBuildToolsVersion)\\Microsoft.Common.props" Condition="Exists('$(MSBuildExtensionsPath)\\$(MSBuildToolsVersion)\\Microsoft.Common.props')" />
  <PropertyGroup>
    <Configuration Condition=" '$(Configuration)' == '' ">Debug</Configuration>
    <Platform Condition=" '$(Platform)' == '' ">AnyCPU</Platform>
    <ProductVersion>
    </ProductVersion>
    <SchemaVersion>2.0</SchemaVersion>
    <ProjectGuid>{${guid}}</ProjectGuid>
    <OutputType>Library</OutputType>
    <AppDesignerFolder>Properties</AppDesignerFolder>
    <RootNamespace>Sitecore.${layer}.${name}</RootNamespace>
    <AssemblyName>Sitecore.${layer}.${name}</AssemblyName>
    <TargetFrameworkVersion>v4.6.2</TargetFrameworkVersion>
  </PropertyGroup>
  <PropertyGroup Condition=" '$(Configuration)|$(Platform)' == 'Debug|AnyCPU' ">
    <DebugSymbols>true</DebugSymbols>
    <DebugType>full</DebugType>
    <Optimize>false</Optimize>
    <OutputPath>bin\\</OutputPath>
    <DefineConstants>DEBUG;TRACE</DefineConstants>
    <ErrorReport>prompt</ErrorReport>
    <WarningLevel>4</WarningLevel>
  </PropertyGroup>
  <PropertyGroup Condition=" '$(Configuration)|$(Platform)' == 'Release|AnyCPU' ">
    <DebugType>pdbonly</DebugType>
    <Optimize>true</Optimize>
    <OutputPath>bin\\</OutputPath>
    <DefineConstants>TRACE</DefineConstants>
    <ErrorReport>prompt</ErrorReport>
    <WarningLevel>4</WarningLevel>
  </PropertyGroup>
  <ItemGroup>
    <Compile Include="Templates.cs" />
    <Content Include="Views\\**\\*.cshtml" />
    <Content Include="App_Config\\**\\*.config" />
    <None Include="packages.config" />
  </ItemGroup>
  <ItemGroup>
    <Reference Include="Sitecore.Kernel, Version=11.1.0.0, Culture=neutral, processorArchitecture=MSIL">
      <HintPath>$(SolutionDir)\\packages\\Sitecore.Kernel.NoReferences.9.0.171219\\lib\\NET462\\Sitecore.Kernel.dll</HintPath>
    </Reference>
  </ItemGroup>
  <Import Project="$(MSBuildBinPath)\\Microsoft.CSharp.targets" />
</Project>
`
}
